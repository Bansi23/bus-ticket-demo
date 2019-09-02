import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MockService } from '../../services/mock.service';
import { map } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';

//import { MockService } from '../mock.service';

@Component({
  selector: 'app-select-root',
  templateUrl: './select-root.component.html',
  styleUrls: ['./select-root.component.css']
})
export class SelectRootComponent implements OnInit {
  //#region property
  searchBus: FormGroup;
  newSDate: any;
  lstGoing: any;
  lstBookData: any = [];
  lstseatCol1: any = [];
  isDisabled: boolean = false;
  orderNo: boolean = false;
  NewItemArray: any = [];
  isbookingProcess: boolean = false;
  date: any;
  index: number = 1;
  total: any;
  tableHeader: any = [' No.', 'Name', 'Mobile No.', 'Date', 'Sheet No', 'total'];
  totalAmount: any = 0;
  totalCustomerAmount: any;
  id: number = 1;
  isClick: boolean = false;
  isBookedbus: boolean = false;
  conseat: boolean = true;
  //#endregion

  //#region form group
  fbSearchBus() {
    this.searchBus = this.fb.group({
      id: this.id++,
      leaving: ['', Validators.required],
      going: ['', Validators.required],
      deptdate: ['', Validators.required],
      itemRows: this.fb.array([]),
      orderno: ['000001']
    });
  }

  //#endregion

  //#region methods
  onSelectLeaving(value) {
    if (value == 1) {
      this.lstGoing = this._mD.going();
    }
    else {
      this.lstGoing = [];
      this.searchBus.patchValue({
        going: ''
      });
    }
  }

  get itemRows() {
    return this.searchBus.get('itemRows') as FormArray;
  }

  initItemRows(id) {
    return this.fb.group({
      index: this.index++,
      Seatid: id,
      name: ['', Validators.required],
      mobileno: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{9}')])],
    });
  }
  get formVal() {
    return <FormArray>this.searchBus.get('itemRows');
  }
  onSelectGoing() {
    this.total = this.searchBus.get('going').value;
  }
  changeCheckbox1(id?, evt?) {
    this.date = this.searchBus.get('deptdate').value;
    this.total = this.searchBus.get('going').value;
    if (this.date == '' || this.total == '') {
      this.lstseatCol1.map(x => {
        x.click = this.isClick;
      });
      this._cS.displayToaster(2, 'Enter date and going city after you can select seat');

    }
    else {
      if (evt == true) {
        this.itemRows.push(this.initItemRows(id));
        this.NewItemArray = this.formVal.value;
      }
      else {
        this.itemRows.removeAt(this.itemRows.value.findIndex(x => x.id == id));
        this.NewItemArray.splice(this.itemRows.value.findIndex(x => x.id == id), 1);
      }
    }
  }

  processToBook() {
    if (this.itemRows.length != 0) {

    }
    this.orderNo = true;
    this.isbookingProcess = true;
  }
  busSearch() {
    this.date = this.searchBus.get('deptdate').value;
    this.total = this.searchBus.get('going').value;
    if (this.date == '' || this.total == '') {
      this._cS.displayToaster(2, 'enter date and going city after you can select seat');
    }
    else {
      this.isBookedbus = true;
      this.selectedVal = (this.selectedVal.getDate() + '/' + (this.selectedVal.getMonth() + 1) + '/' + this.selectedVal.getFullYear());
      this.lstseatCol1.map(x => {
        x.checked = false;
      });
      const added_Item = this.lstBookData.filter((item) => item.deptdate == this.selectedVal);
      for (let i = 0; i < added_Item.length; i++) {
        const element = added_Item[i].itemRows;
        for (let j = 0; j < element.length; j++) {
          const ele = element[j].Seatid;
          var added = this.lstseatCol1.filter((item) => item.id == ele);
          if (added_Item.length) {
            added.map(x => {
              x.checked = true;
            });
          }
        }
      }
    }
  }

  selectedVal: any;
  onDateSelected(val) {
    this.selectedVal = val;
    // val = (val.getDate() + '/' + (val.getMonth() + 1) + '/' + val.getFullYear());
    // this.lstseatCol1.map(x => {
    //   x.checked = false;
    // });
    // const added_Item = this.lstBookData.filter((item) => item.deptdate == val);
    // for (let i = 0; i < added_Item.length; i++) {
    //   const element = added_Item[i].itemRows;
    //   for (let j = 0; j < element.length; j++) {
    //     const ele = element[j].Seatid;
    //     var added = this.lstseatCol1.filter((item) => item.id == ele);
    //     if (added_Item.length) {
    //       added.map(x => {
    //         x.checked = true;
    //       });
    //     }
    //   }
    // }
  }

  pad(str, max) {
    str = str.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  }

  added: any = [];
  orderNumber: any;
  bookBus() {
    for (let val in this.searchBus.controls) {
      this.searchBus.controls[val].markAsTouched();
    };
    debugger;
    this.lstseatCol1 = this._mD.getSeatsCol1();
    const form_data = this.searchBus.value;
    form_data.deptdate = (form_data.deptdate.getDate() + '/' + (form_data.deptdate.getMonth() + 1) + '/' + form_data.deptdate.getFullYear());
    form_data.id = this.lstBookData.length + 1;
    if (this.lstBookData) {
      form_data.orderno = this.pad(this.lstBookData.length + 1, 6);;
    }
    this.lstBookData.push(form_data);
    this._cS.displayToaster(1, 'SuccessFully add ticket');
    for (let i = 0; i < this.lstBookData.length; i++) {
      const element = this.lstBookData[i].itemRows;
      const added_Item = element.filter((item) => item.Seatid);
      for (let j = 0; j < added_Item.length; j++) {
        const ele = added_Item[j].Seatid;
        this.itemRows.removeAt(this.itemRows.value.findIndex(x => x.id == ele));
      }
    }

    this.orderNo = false;
    this.isBookedbus = false;
    this.totalAmount = 0;
    this.itemRows.reset();
    this.isbookingProcess = false;
    this.searchBus.reset();
    this.searchBus.patchValue({
      leaving: '',
      going: ''
    });
    this.date = this.searchBus.get('deptdate').setValue('');
    this.total = this.searchBus.get('going').setValue('');
  }
  toggleCollapse(i) {
    this.lstBookData[i].id = !this.lstBookData[i].id;
  }

  //#endregion

  constructor(private _mD: MockService, private fb: FormBuilder, private _cS: CommonService) { }

  ngOnInit() {
    this.fbSearchBus();
    this.newSDate = new Date();
    this.lstseatCol1 = this._mD.getSeatsCol1();
    this.lstseatCol1.map(x => {
      x.checked = false;
    });
    //this.rowSeats();

    //this.getRec()
  }

}

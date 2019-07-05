import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { MockService } from '../../../services/mock.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss']
})
export class SearchOrderComponent implements OnInit {
  //#region proprerty
  lstOrderStatus: any = [];
  lstPaymentStatus: any = [];
  lstShippingStatus: any = [];
  lstvender: any = [];
  lstpaymentMethod: any = [];
  searchOrder: FormGroup;
  selectedItems: any = [];
  lstOrderData: any = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  //#endregion

  //dropdown static Data
  dropdownSettings = {
    singleSelection: false,
    text: "Select Activity",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  };

  //#region form group
  // fbSearchOrder() {
  //   this.searchOrder = this.fb.group({
  //     sdate: [''],
  //     venderRec: [''],
  //     edate: [''],
  //     mono: [''],
  //     productnm: [''],
  //     mail: [''],
  //     orderstatus: [''],
  //     billinAdd: [''],
  //     paymentStatus: [''],
  //     country: [''],
  //     shippingStatus: [''],
  //     paymentMethod: [''],
  //     ordernote: [''],
  //     orderno: [''],
  //   });
  // }
  //#endregion

  data: any = [];
  GetRecord() {
    this._cS.API_GET(this._cS.getOrderList())
      .subscribe(response => {
        console.log('response', response)
        if (response) {
          this.selectedItems = this.lstOrderStatus.map(x => { return { id: x.id, itemName: x.itemName } });
          this.lstOrderData = [];
          this.data = response;
          this.onItemSelect();
        }
      });
  }
  pageChanged(value) {
    this.pageIndex = +value;
    this.onItemSelect()
  };

  onItemSelect(item?: any) {
    const selectedData = this.selectedItems.map((x: { itemName: any; }) => { return x.itemName });
    var filtered = this.lstOrderData.filter(
      function (e) { return this.indexOf(e.type) != -1; }, selectedData);
    this.lstOrderData = filtered;
    setTimeout(() => {
      this.hideDropdownNumbers();
    });
  }

  hideDropdownNumbers() {
    const drpClass = <HTMLElement>document.querySelector('.countplaceholder');
    if (drpClass) {
      if (this.lstOrderStatus.length == this.selectedItems.length) {
        drpClass.style.display = 'none';
      } else {
        drpClass.style.display = 'block';
      }
    };
  };


  constructor(private _cS: CommonService, private __mD: MockService, private fb: FormBuilder) { }

  ngOnInit() {
    this.GetRecord();
    this.lstOrderStatus = this.__mD.orderStatus();
    this.lstPaymentStatus = this.__mD.paymentStatus();
    this.lstShippingStatus = this.__mD.shippingStatus();
    this.lstvender = this.__mD.vender();
    this.lstpaymentMethod = this.__mD.paymentMethod();
    // this.fbSearchOrder();
    this.lstOrderStatus.map(x => {
      this.selectedItems.push(x);
    });
    setTimeout(() => {
      this.hideDropdownNumbers();
    }, 100);
  }
}

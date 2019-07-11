import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { MockService } from '../../../services/mock.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

const emailPattern = environment.emailPattern;
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
  selectedorderItems: any = [];
  selectedpaymentItems: any = [];
  selectedshippingItem: any = [];
  lstOrderData: any = [];
  lstCountry: any = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  selectAll: boolean = false;
  finalTotal: any;
  totalRecord: any;
  //#endregion

  //dropdown static Data
  dropdownOrderStatus = {
    singleSelection: false,
    text: "Select Order Status",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  };

  dropdownPaymentStatus = {
    singleSelection: false,
    text: "Select Payment Status",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  };

  dropdownShippingStatus = {
    singleSelection: false,
    text: "Select Shipping Status",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  };

  //#endregion

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    openSelectorOnInputClick: true,
    editableDateField: false
  };

  //#region form group
  fbSearchOrder() {
    this.searchOrder = this.fb.group({
      sdate: [''],
      venderRec: [''],
      edate: [''],
      phone_number: ['', Validators.pattern('[0-9]\\d{0,15}')],
      productnm: [''],
      mail: ['', Validators.pattern(emailPattern)],
      orderstatus: [''],
      billingAdd: [''],
      paymentStatus: [''],
      country: [''],
      shippingStatus: [''],
      paymentMethod: [''],
      ordernote: [''],
      orderno: ['', Validators.pattern('[0-9]\\d{0,50}')]
    });
  }
  //#endregion

  GetRecord() {
    this._cS.API_GET(this._cS.getOrderList(this.pageSize, this.pageIndex))
      .subscribe(res => {
        if (res) {
          this.lstOrderData = res.orders;
          this.finalTotal = this.lstOrderData.map(o => o.order_total).reduce((a, c) => a + c, 0);
        }
      });
  }

  GetCountRecord() {
    this._cS.API_GET(this._cS.getCountItem())
      .subscribe(res => {
        if (res) {
          console.log(res)
          this.totalRecord = res.count;
        }
      });
  }

  pageChanged(value) {
    this.pageIndex = +value;
    this.GetRecord();
  };
  selectedChanged(value) {
    this.pageIndex = 1;
    this.pageSize = +value;
    this.GetRecord();
  }

  filteredOrder: any;
  filteredPayment: any;
  filteredShipping: any;
  onItemOrderSelect(item?: any) {
    let FormVal = this.searchOrder.value.orderStatus;
    console.log('FormVal', FormVal)
    const selectedData = this.selectedorderItems.map((x: { itemName: any; }) => { return x.itemName });
    console.log('selectedData', selectedData)
    this.filteredOrder = this.lstOrderData.filter(
      function (e) { return this.indexOf(e.order_status) != -1; }, selectedData);
  }

  onItemPaymentSelect(item?: any) {
    const selectedData = this.selectedpaymentItems.map((x: { itemName: any; }) => { return x.itemName });
    this.filteredPayment = this.lstOrderData.filter(
      function (e) { return this.indexOf(e.payment_status) != -1; }, selectedData);
  }

  onItemshippingSelect(item?: any) {
    const selectedData = this.selectedshippingItem.map((x: { itemName: any; }) => { return x.itemName });
    this.filteredShipping = this.lstOrderData.filter(
      function (e) { return this.indexOf(e.shipping_status) != -1; }, selectedData);
  }

  searchRecord() {
    let FormVal = this.searchOrder.value;
    this.onItemOrderSelect();
    this.onItemPaymentSelect();
    this.onItemshippingSelect();
    this.lstOrderData = this.filteredOrder;
    this.lstOrderData = this.filteredPayment;
    this.lstOrderData = this.filteredShipping;
  }


  select_all() {
    for (let i = 0; i < this.lstOrderData.length; i++) {
      this.lstOrderData[i].select = this.selectAll;
    };
  }
  checkIfAllSelected() {
    this.selectAll = this.lstOrderData.every(function (item: any) {
      return item.select == true;
    });
  }

  ViewData(index) {
    console.log(index);
    this._router.navigate(['/sales/viewrecord'], { queryParams: { id: index } });
  }

  StaticList() {
    this.lstOrderStatus = this.__mD.orderStatus();
    this.lstPaymentStatus = this.__mD.paymentStatus();
    this.lstShippingStatus = this.__mD.shippingStatus();
    this.lstvender = this.__mD.vender();
    this.lstpaymentMethod = this.__mD.paymentMethod();
    this.lstCountry = this.__mD.countryList();
  }
  MultiselectDropData() {
    this.lstOrderStatus.map(x => {
      this.selectedorderItems.push(x);
    });
    this.lstPaymentStatus.map(x => {
      this.selectedpaymentItems.push(x);
    });

    this.lstShippingStatus.map(x => {
      this.selectedshippingItem.push(x);
    });
    this.searchOrder.get('orderstatus').setValue(this.selectedorderItems);
    this.searchOrder.get('paymentStatus').setValue(this.selectedpaymentItems);
    this.searchOrder.get('shippingStatus').setValue(this.selectedshippingItem);
  }

  constructor(private _cS: CommonService, private __mD: MockService, private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.fbSearchOrder();
    this.StaticList();
    this.MultiselectDropData();
    this.GetCountRecord();
    this.GetRecord();
    this.lstOrderData.map(x => { x.select = '' });


  }
}

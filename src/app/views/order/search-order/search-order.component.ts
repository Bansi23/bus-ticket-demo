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
      mono: ['', Validators.pattern('[0-9]\\d{0,15}')],
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

  data: any = [];
  GetRecord() {
    this._cS.API_GET(this._cS.getOrderList())
      .subscribe(response => {
        console.log('response', response)
        if (response) {
          this.selectedorderItems = this.lstOrderStatus.map(x => { return { id: x.id, order_status: x.order_status } });
          this.selectedpaymentItems = this.lstPaymentStatus.map(x => { return { id: x.id, payment_status: x.payment_status } });
          this.selectedshippingItem = this.lstShippingStatus.map(x => { return { id: x.id, shipping_status: x.shipping_status } });
          this.lstOrderData = [];
          this.lstpaymentMethod = [];
          this.lstShippingStatus = [];
          this.data = response;
          this.onItemOrderSelect();
          this.onItemPaymentSelect();
          this.onItemshippingSelect();
        }
      });
  }
  pageChanged(value) {
    this.pageIndex = +value;
    this.onItemOrderSelect()
  };

  onItemOrderSelect(item?: any) {
    const selectedData = this.selectedorderItems.map((x: { order_status: any; }) => { return x.order_status });
    console.log(selectedData, 'selectedData')
    var filtered = this.lstOrderData.filter(
      function (e) { return this.indexOf(e.type) != -1; }, selectedData);
    this.lstOrderData = filtered;
    setTimeout(() => {
      this.hideOrderDropDownNumbers();
    });
  }

  onItemPaymentSelect(item?: any) {
    const selectedData = this.selectedpaymentItems.map((x: { payment_status: any; }) => { return x.payment_status });
    var filtered = this.lstPaymentStatus.filter(
      function (e) { return this.indexOf(e.type) != -1; }, selectedData);
    this.lstPaymentStatus = filtered;
    setTimeout(() => {
      this.hidePaymentDropDownNumbers();
    });
  }

  onItemshippingSelect(item?: any) {
    const selectedData = this.selectedshippingItem.map((x: { shipping_status: any; }) => { return x.shipping_status });
    var filtered = this.lstShippingStatus.filter(
      function (e) { return this.indexOf(e.type) != -1; }, selectedData);
    this.lstShippingStatus = filtered;
    setTimeout(() => {
      this.hideshippingDropDownNumbers();
    });
  }

  hideOrderDropDownNumbers() {
    const drpClass = <HTMLElement>document.querySelector('.countplaceholder');
    if (drpClass) {
      if (this.lstOrderStatus.length == this.selectedorderItems.length) {
        drpClass.style.display = 'none';
      } else {
        drpClass.style.display = 'block';
      }
    }
  }

  hidePaymentDropDownNumbers() {
    const drpClass = <HTMLElement>document.querySelector('.countplaceholder');
    if (drpClass) {
      if (this.lstPaymentStatus.length == this.selectedpaymentItems.length) {
        drpClass.style.display = 'none';
      } else {
        drpClass.style.display = 'block';
      }
    }
  }

  hideshippingDropDownNumbers() {
    const drpClass = <HTMLElement>document.querySelector('.countplaceholder');
    if (drpClass) {
      if (this.lstShippingStatus.length == this.selectedshippingItem.length) {
        drpClass.style.display = 'none';
      } else {
        drpClass.style.display = 'block';
      }
    }
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
    this._router.navigateByUrl('/sales/viewrecord');
    // this._cS.API_GET(this._cS.getOrderId(index)).subscribe(res => {
    //   if (res) {
    //     console.log('res', res)
    //   }
    //   else {
    //     alert('check your internet connection')
    //   }
    // });
  }

  constructor(private _cS: CommonService, private __mD: MockService, private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.GetRecord();
    this.fbSearchOrder();
    this.lstOrderStatus = this.__mD.orderStatus();
    this.lstPaymentStatus = this.__mD.paymentStatus();
    this.lstShippingStatus = this.__mD.shippingStatus();
    this.lstvender = this.__mD.vender();
    this.lstpaymentMethod = this.__mD.paymentMethod();
    this.lstCountry = this.__mD.countryList();

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
    setTimeout(() => {
      this.hideOrderDropDownNumbers();
      this.hidePaymentDropDownNumbers();
      this.hideshippingDropDownNumbers();
    }, 100);
    this.lstOrderData.map(x => { x.select = '' });
    this.finalTotal = this.lstOrderData.map(o => o.order_total).reduce((a, c) => a + c, 0);
  }
}

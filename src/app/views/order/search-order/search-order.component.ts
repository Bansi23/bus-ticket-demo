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

  //#endregion

  //#region form group
  fbSearchOrder() {
    this.searchOrder = this.fb.group({
      sdate: [''],
      venderRec: [''],
      edate: [''],
      mono: [''],
      productnm: [''],
      mail: [''],
      orderstatus: [''],
      billinAdd: [''],
      paymentStatus: [''],
      country: [''],
      shippingStatus: [''],
      paymentMethod: [''],
      ordernote: [''],
      orderno: [''],
    });
  }
  //#endregion


  onItemSelect(item?: any) {
    // const selectedData = this.selectedItems.map((x: { itemName: any; }) => { return x.itemName });
    // var filtered = this.data.filter(
    //   function (e) { return this.indexOf(e.type) != -1; }, selectedData);
    // this.lstdiaryData = filtered;
    // setTimeout(() => {
    //   this.hideDropdownNumbers();
    // });
  }

  constructor(private _cS: CommonService, private __mD: MockService, private fb: FormBuilder) { }

  ngOnInit() {
    this.lstOrderStatus = this.__mD.orderStatus();
    this.lstPaymentStatus = this.__mD.paymentStatus();
    this.lstShippingStatus = this.__mD.shippingStatus();
    this.lstvender = this.__mD.vender();
    this.lstpaymentMethod = this.__mD.paymentMethod();
    this.fbSearchOrder();
    this.lstOrderStatus.map(x => {
      this.selectedItems.push(x);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MockService } from '../../../services/mock.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  //#region product info form
  productInfoForm: FormGroup;

  productInfoForm_fb() {
    this.productInfoForm = this.fb.group({
      id: [null],
      productName: [null, Validators.required],
      shortDescription: [null],
      fullDescription: [null],
      sku: [null],
      inventoryMethod: [null],
      shippingEnable: [null],
      weight: [null],
      length: [null],
      width: [null],
      height: [null],
      categories: [null],
      price: [null],
      productCost: [null],
      discount: [null],
      tax: [null],
      taxCategory: [null]
    });
  }
  //#endregion

  //#region static lists
  lstInvantory: any = [];
  lstDiscount: any = [];
  lstTaxCategory: any = [];
  bindStaticList() {
    this.lstInvantory = this._mS.getInvantoryMethods();
    this.lstDiscount = this._mS.getDiscountList();
    this.lstTaxCategory = this._mS.getTaxCategory();
  }
  //#endregion

  //#region fuctions
  isShipping(ev) {
    console.log('ev:', ev)
    if(ev.target.checked){
      ev.target.classList();
    }

  }
  //#endregion
  constructor(private fb: FormBuilder,
    private _mS: MockService) { }

  ngOnInit() {
    this.productInfoForm_fb();
    this.bindStaticList();
  }

}

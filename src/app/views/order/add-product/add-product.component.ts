import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  //#region propery
  lstWarehouse: any = [];
  lstProductType: any = [];
  lstProductData: any = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  searchProduct: FormGroup;
  //#endregion

  //#region form group
  fbSearchProduct() {
    this.searchProduct = this.fb.group({
      productnm: [''],

    });
  }
  //#endregion

  //#region methods
  backToSearchList() {
    this._router.navigateByUrl('/sales/viewrecord');
  }

  getProductRecord() {
    this._cS.API_GET(this._cS.URL_getProductList())
      .subscribe(response => {
        if (response) {
          console.log('response', response);
          this.lstProductData = response;
        }
      });
  }
  pageChanged(value) {
    this.pageIndex = +value;
  };
  //#endregion

  ngOnInit() {
    this.getProductRecord();
    this.fbSearchProduct();
    this.lstWarehouse = this._mD.getWareHouseList();
    this.lstProductType = this._mD.getProductType();
  }
  constructor(private _mD: MockService, private _cS: CommonService, private fb: FormBuilder, private _router: Router) { }

}

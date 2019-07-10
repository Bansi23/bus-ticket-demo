import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  countProduct: any;
  orderId: any;
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
    this._route.queryParams.subscribe(params => {
      this.orderId = params['orderid']
    });
    this._router.navigate(['/sales/viewrecord'], { queryParams: { orderid: this.orderId } });

  }

  getProductRecord() {
    this._cS.API_GET(this._cS.URL_getProductList())
      .subscribe(response => {
        if (response) {
          this.lstProductData = response.products;
        }
      });
  }
  getProductCount() {
    this._cS.API_GET(this._cS.URL_getProductCount()).subscribe(res => {
      if (res) {
        this.countProduct = res.count;
      }
    })
  }
  pageChanged(value) {
    this.pageIndex = +value;
  };

  SelectProduct(id) {
    this._router.navigate(['/sales/selectproduct'], { queryParams: { id: id } });
  }
  //#endregion

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    this.getProductRecord();
    this.fbSearchProduct();
    this.getProductCount();
    this.lstWarehouse = this._mD.getWareHouseList();
    this.lstProductType = this._mD.getProductType();
  }
  constructor(private _mD: MockService, private _cS: CommonService, private fb: FormBuilder, private _router: Router, private _route: ActivatedRoute) { }

}

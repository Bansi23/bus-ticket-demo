import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { MockService } from '../../../services/mock.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  lstWarehouse: any = [];
  lstCategory: any = [];
  lstManufacturer: any = [];
  lstVendor: any = [];
  lstProductType: any = [];
  lstPublised: any = [];

  bindStaticList() {
    this.lstWarehouse = this._mS.getWareHouseList();
    this.lstVendor = this._mS.getVendorList();
    this.lstProductType = this._mS.getProductType();
    this.lstPublised = this._mS.getProductType();
  }

  getCategoryList() {
    this._cS.API_GET(this._cS.URL_getCategoryList())
      .subscribe(res => {
        this.lstCategory = res.categories;
      });
  }

  getManufacturerList() {
    this._cS.API_GET(this._cS.URL_getManufacturerList())
      .subscribe(res => {
        this.lstManufacturer = res.manufacturers;
      });
  }

  //#region search form
  searchProdFrom: FormGroup;

  searchProdFrom_fb() {
    this.searchProdFrom = this.fb.group({
      prodName: [null],
      wareHouse: [null],
      category: [null],
      prodType: [null],
      searchSubCat: [null],
      published: [null],
      manufacturer: [null],
      vendor: [null],
      sku: [null]
    })
  }

  searchList() {
    console.log('this.searchProdFrom.getRawValue();:', this.searchProdFrom.getRawValue())

  }
  //#endregion

  //#region delete recoed
  deleteSelected() {

  }
  //#endregion

  //#region add product function
  addProduct() {
    this._router.navigateByUrl('/catalog/addProduct');
  }
  //#endregion
  constructor(
    private _cS: CommonService,
    private _mS: MockService,
    private _router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.searchProdFrom_fb();
    this.searchProdFrom.patchValue({
      wareHouse: 0,
      category: 0,
      published: 0,
      prodType: 0,
      manufacturer: 0,
      vendor: 0,
    })
    this.bindStaticList();
    this.getCategoryList();
    this.getManufacturerList();
  }
}

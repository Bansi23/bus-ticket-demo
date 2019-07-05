import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { MockService } from '../../../services/mock.service';
import { Router } from '@angular/router';

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
        console.log('res:', res)
      });
  }

  getManufacturerList() {
    this._cS.API_GET(this._cS.URL_getManufacturerList())
      .subscribe(res => {
        console.log('res:', res)
      });
  }

  //#region add product function
  addProduct() {
    this._router.navigateByUrl('/catalog/create');
  }
  //#endregion
  constructor(
    private _cS: CommonService,
    private _mS: MockService,
    private _router: Router) { }

  ngOnInit() {
    this.bindStaticList();
    this.getCategoryList();
    this.getManufacturerList();
  }

}

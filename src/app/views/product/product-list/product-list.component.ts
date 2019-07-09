import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  tableHeader: any = [' ', 'picture', 'product name', 'sku', 'price', 'stock quantity', 'product type', 'published', 'action'];
  lstProduct: any = [];
  pageIndex: number = 1;
  pageSize: number = 10;

  getProductList() {
    this._cS.API_GET(this._cS.URL_getProductList())
      .subscribe(res => {
        this.lstProduct = res.products;
      });
  }

  editProduct(prodId) {
     
  }
  constructor(private _cS: CommonService) { }

  ngOnInit() {
    this.getProductList();
  }

}

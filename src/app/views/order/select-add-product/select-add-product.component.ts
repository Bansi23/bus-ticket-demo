import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-select-add-product',
  templateUrl: './select-add-product.component.html',
  styleUrls: ['./select-add-product.component.scss']
})
export class SelectAddProductComponent implements OnInit {

  id: any;
  AddProduct: FormGroup
  addProduct: any = [];
  orderid: any;

  backToSearchList() {
    this._router.navigate(['/sales/addproduct'], { queryParams: { orderid: this.id } });
  }
  //#region form group
  fbAddProduct() {
    this.AddProduct = this.fb.group({
      priceIncl: [''],
      priceExcl: [''],
      quantity: ['1'],
      totalIncl: [''],
      totalExcl: ['']
    });
  }
  //#endregion

  getProduct() {
    this._route.queryParams.subscribe(params => {
      this.id = params['id']
    });
    this._cS.API_GET(this._cS.URL_getProductById(this.id))
      .subscribe(response => {
        if (response) {
          this.addProduct = response.products[0];
          this.AddProduct.patchValue({
            priceIncl: this.addProduct.price ? this.addProduct.price : null,
            priceExcl: this.addProduct.price ? this.addProduct.price : null,
            totalIncl: this.addProduct.price ? this.addProduct.price : null,
            totalExcl: this.addProduct.price ? this.addProduct.price : null,

          });
        }
      });
  }

  addProducttoOrder() {

  }
  constructor(private _router: Router, private _route: ActivatedRoute, private fb: FormBuilder, private _cS: CommonService) { }

  ngOnInit() {
    this.fbAddProduct();
    this.getProduct();
    // this._route.queryParams.subscribe(params => {
    //   this.id = params['id']
    // });
  }

}

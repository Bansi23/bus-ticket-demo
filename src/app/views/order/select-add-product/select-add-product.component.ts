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
  productid: any;
  orderItem: any = [];
  newArray: any = [];

  backToSearchList() {
    this._route.queryParams.subscribe(params => {
      this.id = params['id']
    });
    this._router.navigate(['/sales/addproduct'], { queryParams: { id: this.id } });
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

  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.id = params['id']
      this.productid = params['productid']
    });
  }

  getProduct() {
    this.getParameter();
    this._cS.API_GET(this._cS.URL_getProductById(this.productid))
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
    this.getProduct();
    this._route.queryParams.subscribe(params => {
      this.orderid = params['id']
      this.productid = params['productid']
    });
    this._cS.API_GET(this._cS.getOrderItem(this.orderid))
      .subscribe(response => {
        if (response) {
          this.orderItem = response.order_items;
          let body = {
            order_item: {
              quantity: this.AddProduct.value.quantity,
              unit_price_incl_tax: this.AddProduct.value.totalExcl,
              managerOfVendor: this.AddProduct.value.totalExcl,
              unit_price_excl_tax: this.AddProduct.value.totalExcl,
              price_incl_tax: this.AddProduct.value.totalExcl,
              price_excl_tax: this.AddProduct.value.totalExcl,
              discount_amount_incl_tax: 0.0000,
              discount_amount_excl_tax: 0.0000,
              original_product_cost: 0.0000,
              attribute_description: "",
              download_count: 0,
              isDownload_activated: this.addProduct.is_download,
              product: this.addProduct,
              product_id: this.productid
            }
          }
          console.log('body:', body)

          this._cS.API_POST(this._cS.getOrderItem(this.orderid), body)
            .subscribe(response => {
              if (response) {
                this._router.navigate(['/sales/viewrecord'], { queryParams: { id: this.id } });
              }
            })
        }
      });
  }
  constructor(private _router: Router, private _route: ActivatedRoute, private fb: FormBuilder, private _cS: CommonService) { }

  ngOnInit() {
    this.fbAddProduct();
    this.getProduct();
  }

}

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

  getProduct() {
    this._route.queryParams.subscribe(params => {
      this.id = params['id']
      this.productid = params['productid']
    });
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
    });
    this._cS.API_GET(this._cS.getOrderItem(this.orderid))
      .subscribe(response => {
        if (response) {
          this.orderItem = response.order_items;
          this.orderItem.map(x => {
            x.quantity = this.AddProduct.value.quantity,
              x.unit_price_incl_tax = this.AddProduct.value.totalExcl,
              x.unit_price_excl_tax = this.AddProduct.value.totalExcl,
              x.price_incl_tax = this.AddProduct.value.totalExcl,
              x.price_excl_tax = this.AddProduct.value.totalExcl,
              x.discount_amount_incl_tax = 0.0000,
              x.discount_amount_excl_tax = 0.0000,
              x.original_product_cost = 0.0000,
              x.attribute_description = "",
              x.download_count = 0,
              x.isDownload_activated = this.addProduct.is_download,
              x.products = this.addProduct;
          });

          // let body = {
          //   customer: {
          //     email: this.addCustomerForm.value.custEmail,
          //     password: this.addCustomerForm.value.custPassword,
          //     role_ids: roles,
          //     managerOfVendor: this.addCustomerForm.value.custManagerOfVendor,
          //     gender: this.addCustomerForm.value.custGender,
          //     first_name: this.addCustomerForm.value.custFirstName,
          //     last_name: this.addCustomerForm.value.custLastName,
          //     date_of_birth: date,
          //     company: this.addCustomerForm.value.custCompanyName,
          //     admin_comment: this.addCustomerForm.value.custAdminComment,
          //     is_tax_exempt: this.addCustomerForm.value.custIsTaxExempt,
          //     subscribed_to_newsletter: this.addCustomerForm.value.custNewsletter,
          //     active: this.addCustomerForm.value.custActive
          //   }
          // }
          let body = {
            
          }
          this.orderItem.push(this.addProduct);
          console.log('this.addProduct', this.orderItem);
        }
      });

  }
  constructor(private _router: Router, private _route: ActivatedRoute, private fb: FormBuilder, private _cS: CommonService) { }

  ngOnInit() {
    this.fbAddProduct();
    this.getProduct();
  }

}

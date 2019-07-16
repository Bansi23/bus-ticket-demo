import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product-to-order',
  templateUrl: './add-product-to-order.component.html',
  styleUrls: ['./add-product-to-order.component.scss']
})
export class AddProductToOrderComponent implements OnInit {

  orderId: any;
  viewRecord: any = [];
  orderRecord: any = [];
  updateIndex = 1;
  itemForm: FormGroup;
  @ViewChild('editItem', { static: true }) EditRecord: ModalDirective;

  fbItemEdit() {
    this.itemForm = this.fb.group({
      id: [''],
      unitexclprice: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,50}')])],
      quantity: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,50}')])],
      discount: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,50}')])],
      excltax: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,50}')])],
      img: [''],
      productName: ['']
    });
  }
  getParemeter() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
  }

  getRecord() {
    this.getParemeter();
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderItem(this.orderId))
        .subscribe(response => {
          if (response) {
            this.orderRecord = response.order_items;
          }
        });
    }
  }
  DeleteRecord(itemid) {
    this.getParemeter();
    this._cS.API_DELETE(this._cS.getOrderItemId(this.orderId, itemid))
      .subscribe(res => {
        if (res) {
          if (confirm('Are you sure want to delete this record?')) {
            this.getRecord();
          }
        }
      })
  }
  saveRecord() {
    this.getParemeter();
    const formValue = this.itemForm.getRawValue();
    console.log('formValue',formValue);

    let body = {
      // order_item: {
      //   quantity: this.itemForm.value.quantity,
      //   unitexclprice: this.orderRecord.unit_price_excl_tax,
      //   discount: this.orderRecord.value.totalExcl,
      //   unit_price_excl_tax: this.orderRecord.unit_price_excl_tax,
      //   price_incl_tax: this.orderRecord.unit_price_excl_tax,
      //   price_excl_tax: this.orderRecord.unit_price_excl_tax,
      //   discount_amount_incl_tax: 0.0000,
      //   discount_amount_excl_tax: 0.0000,
      //   original_product_cost: 0.0000,
      //   attribute_description: "",
      //   download_count: 0,
      //   isDownload_activated: this.addProduct.is_download,
      //   product: this.addProduct,
      //   product_id: this.productid
      // }
    }
    // this._cS.API_POST(this._cS.getOrderItemId(this.orderId, itemid), body)
    //   .subscribe(response => {
    //     if (response) {
    //       console.log('response', response);
    //     }
    //   })
  }

  editRecord(row) {
    this.itemForm.patchValue({
      id: row.id,
      unitexclprice: row.unit_price_excl_tax,
      quantity: row.quantity,
      discount: row.discount_amount_excl_tax,
      excltax: row.price_excl_tax,
      img: row.product.name,
      productName: row.product.name
    });
    this.EditRecord.show();
  }
  close() {
    this.EditRecord.hide();
  }

  addProduct() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    this._router.navigate(['/sales/addproduct'], { queryParams: { id: this.orderId } });
  }
  constructor(private _router: Router, private _route: ActivatedRoute, private _cS: CommonService, private fb: FormBuilder) { }
  ngOnInit() {
    this.fbItemEdit();
    this.getRecord();
  }
}

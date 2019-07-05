import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  // productInfoForm: FormGroup;

  // productInfoForm_fb() {
  //   this.productInfoForm = this.fb.group({
  //     id: [{ value: '', disabled: true }, Validators.required],
  //     productName : [null, Validators.required],
  //     shortDescription : [null],
  //     fullDescription : [null],
  //     sku : [null],
  //     inventoryMethod : [null],
  //     shippingEnable : []
  //   });
  // }
  constructor() { }

  ngOnInit() {
  }

}

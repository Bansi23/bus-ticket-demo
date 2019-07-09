import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-to-order',
  templateUrl: './add-product-to-order.component.html',
  styleUrls: ['./add-product-to-order.component.scss']
})
export class AddProductToOrderComponent implements OnInit {

  addProduct() {
    this._router.navigateByUrl('/sales/addproduct');
  }
  constructor(private _router: Router) { }

  ngOnInit() {
  }

}

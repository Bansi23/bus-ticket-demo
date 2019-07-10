import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));
@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit {
  title: any = 'Add a new product';

  backToList() {
    this._router.navigateByUrl('/catalog/product');
  }

  constructor(private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('editProductId') != null) {
      console.log('editedRecord:', editedRecord)
      this.title = `Edit product details - ${editedRecord[0].name}`;
    } else {
      this.title = 'Add a new product';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
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

  saveProductDetails() {
    let body = {
      
    }
    this._cS.API_POST(this._cS.getProductList(), body)
      .subscribe(res => {
        console.log('res:', res)
      })
  }

  constructor(private _router: Router,
    private _cS: CommonService) { }

  ngOnInit() {
    if (localStorage.getItem('editProductId') != null) {
      console.log('editedRecord:', editedRecord)
      this.title = `Edit product details - ${editedRecord.name}`;
    } else {
      this.title = 'Add a new product';
    }
  }

}

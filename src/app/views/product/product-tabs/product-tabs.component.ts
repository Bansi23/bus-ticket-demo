import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { TabDirective } from 'ngx-bootstrap/tabs/public_api';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit {
  title: any = 'Add a new product';

  backToList() {
    this._router.navigateByUrl('/catalog/product');
    localStorage.removeItem('EditedRecord');
  }

  tabId: any = "1";
  onSelect(e: TabDirective) {
    this.tabId = e.id;
  }

  //#region tabs routing
  goToInfo() {
    this.getParameter();
    if (this.productId) {
      this._router.navigate(['catalog/addProduct/productInfo'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addProduct/productInfo']);
    }
  }

  goToPicture() {
    this.getParameter();
    if (this.productId) {
      this._router.navigate(['catalog/addProduct/productPicture'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addProduct/productPicture']);
    }
  }

  goToAttribute() {
    this.getParameter();
    if (this.productId) {
      this._router.navigate(['catalog/addProduct/productAttributes'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addProduct/productAttributes']);
    }
  }

  goToSpecification() {
    this.getParameter();
    if (this.productId) {
      this._router.navigate(['catalog/addProduct/productSpecificationAttr'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addProduct/productSpecificationAttr']);
    }
  }
  //#endregion

  productId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id']
    });
  }
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _cS: CommonService,
  ) { }

  ngOnInit() {
    this.getParameter();
    var editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));
    if (this.productId != null) {
      this.title = `Edit product details - ${editedRecord.name}`;
    } else {
      this.title = 'Add a new product';
    }
  }
}

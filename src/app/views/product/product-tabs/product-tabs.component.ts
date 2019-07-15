import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { TabDirective } from 'ngx-bootstrap/tabs/public_api';
import { ProductInfoService } from '../../../services/FormServices/product-info.service';
const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));
@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit {
  title: any = 'Add a new product';
  lstTabs: any = [];

  getTabs() {
    this.lstTabs = this._cS.getProductTabs();
  }

  backToList() {
    this._router.navigateByUrl('/catalog/product');
  }

  tabId: any = "1";
  onSelect(e: TabDirective) {
    this.tabId = e.id;
  }

  constructor(private _router: Router,
    private _cS: CommonService,
  ) { }

  ngOnInit() {
    this.getTabs();
    if (localStorage.getItem('editProductId') != null) {
      this.title = `Edit product details - ${editedRecord.name}`;
    } else {
      this.title = 'Add a new product';
    }
  }
}

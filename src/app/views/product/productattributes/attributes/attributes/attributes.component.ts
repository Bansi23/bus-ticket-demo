import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  tableHeader: any = ['Attribute', 'Text prompt', 'Is Required', 'Control type', 'Display order', 'Validation rules', 'Condition', 'Action']
  pageIndex: number = 1;
  pageSize: number = 10;
  totalRecords: number;

  pageChanged(value) {
    this.pageIndex = +value;
    this.getAttributeList();
  };

  changePageSize(value) {
    this.pageIndex = 1;
    this.pageSize = value;
    this.getAttributeList();
  }
  //#region bind attribute list when edit
  lstAttr: any = [];
  getAttributeList() {
    var editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));
    if (editedRecord.attributes.length > 0) {
      this.lstAttr = editedRecord.attributes;
      this.totalRecords = this.lstAttr.length;
    }
  }

  productId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id']
    });
  }
  //#endregion  

  addAttributes() {
    this.getParameter();
    console.log('this.productId:', this.productId)
    if (this.productId) {
      this._router.navigate(['/catalog/addnew-attribute'], { queryParams: { id: this.productId } })
    } else {
      this._router.navigate(['/catalog/addnew-attribute'])
    }
  }

  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getParameter();
    if (this.productId) {
      this.getAttributeList();
    } else {
      console.log('add attribute')
    }

  }

}

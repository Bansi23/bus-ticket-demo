import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const productId = localStorage.getItem('editProductId');
const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));

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
    if (productId != null) {
      this.lstAttr = editedRecord.attributes;
      this.totalRecords = this.lstAttr.length;
    }
  }
  //#endregion  

  addAttributes() {
    this._router.navigateByUrl('/catalog/addnew-attribute')
  }

  constructor(private _router: Router) { }

  ngOnInit() {
    this.getAttributeList();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

const productId = localStorage.getItem('editProductId');
const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));

@Component({
  selector: 'app-specificationattributes',
  templateUrl: './specificationattributes.component.html',
  styleUrls: ['./specificationattributes.component.scss']
})
export class SpecificationattributesComponent implements OnInit {

  tableHeader: any = ['Attribute', 'type', 'Value', 'Allow filtering', 'Show on product page', 'Display order', 'action'];
  lstAttributeType: any = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  totalRecords: number;

  pageChanged(value) {
    this.pageIndex = +value;
    this.getSpecificAttrList();
  };

  changePageSize(value) {
    this.pageIndex = 1;
    this.pageSize = value;
    this.getSpecificAttrList();
  }
  specificationForm: FormGroup;

  specificationForm_fb() {
    this.specificationForm = this.fb.group({
      attrType: [null],
      attr: [null],
      attrOption: [null],
      allowFilter: [null],
      showOnProd: [null],
      displayOrder: [null],
    })
  }

  //#region get specification attribute list
  lstSpecificAttr: any = [];
  getSpecificAttrList() {
    if (productId != null) {
      this.lstSpecificAttr = editedRecord.product_specification_attributes;
      this.totalRecords = this.lstSpecificAttr.length;
    }
  }
  //#endregion
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.specificationForm_fb();
  }

}

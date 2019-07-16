import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MockService } from '../../../services/mock.service';

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

  //#region bind static list
  lstAttrType: any = [];
  lstAttr: any = [];
  lstAttrOptions: any = [];
  attrOptions: any = [];
  bindList() {
    this.lstAttrType = this._mS.getAttributeType();
    this.lstAttr = this._mS.getAttribute();
    this.attrOptions = this._mS.getAttributeOptions();
  }

  getAttrOptions(value) {
    var filter = this.attrOptions.filter(x => x.aId == value);
    this.lstAttrOptions = filter;
  }
  //#endregion

  //#region get specification attribute list
  lstSpecificAttr: any = [];
  getSpecificAttrList() {
    if (productId != null) {
      this.lstSpecificAttr = editedRecord.product_specification_attributes;
      this.totalRecords = this.lstSpecificAttr.length;
    }
  }
  //#endregion
  constructor(private fb: FormBuilder,
    private _mS: MockService) { }

  ngOnInit() {
    this.specificationForm_fb();
    this.bindList();
    this.getAttrOptions("1");
    this.specificationForm.patchValue({
      attrType: 1,
      attr: 1,
      attrOption: 1,
    });
  }

}

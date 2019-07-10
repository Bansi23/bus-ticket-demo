import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-specificationattributes',
  templateUrl: './specificationattributes.component.html',
  styleUrls: ['./specificationattributes.component.scss']
})
export class SpecificationattributesComponent implements OnInit {

  tableHeader: any = ['Attribute', 'type', 'Value', 'Allow filtering', 'Show on product page', 'Display order', 'action'];
  lstAttributeType: any = [];
  lstAttribute
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.specificationForm_fb();
  }

}

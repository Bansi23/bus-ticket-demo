import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specificationattributes',
  templateUrl: './specificationattributes.component.html',
  styleUrls: ['./specificationattributes.component.scss']
})
export class SpecificationattributesComponent implements OnInit {

  tableHeader: any = ['Attribute', 'type', 'Value', 'Allow filtering', 'Show on product page', 'Display order', 'action'];
  constructor() { }

  ngOnInit() {
  }

}

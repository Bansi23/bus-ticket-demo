import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  tableHeader: any = ['Attribute', 'Text prompt', 'Is Required', 'Control type', 'Display order', 'Validation rules', 'Condition', 'Action']

  addAttributes() {
    this._router.navigateByUrl('/catalog/addnew-attribute')
  }
  constructor(private _router: Router) { }

  ngOnInit() {
  }

}

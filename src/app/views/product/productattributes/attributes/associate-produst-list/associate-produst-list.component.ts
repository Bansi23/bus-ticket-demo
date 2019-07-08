import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-associate-produst-list',
  templateUrl: './associate-produst-list.component.html',
  styleUrls: ['./associate-produst-list.component.scss']
})
export class AssociateProdustListComponent implements OnInit {

  tableHeader: any = ['Select', 'Product name', 'Published'];

  //#region search panel form 
  associateForm: FormGroup;

  associateForm_fb() {
    this.associateForm = this.fb.group({
      productName : [null],
      productType : [null],
      category : [null],
      manufacturer : [null],
      vendor : [null],
    })
  }
  //#endregion
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.associateForm_fb();
  }

}

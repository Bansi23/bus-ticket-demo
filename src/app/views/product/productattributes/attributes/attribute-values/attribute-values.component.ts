import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MockService } from '../../../../../services/mock.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-values',
  templateUrl: './attribute-values.component.html',
  styleUrls: ['./attribute-values.component.scss']
})
export class AttributeValuesComponent implements OnInit {
  @ViewChild('valuesModal', { static: false }) valuesModal: ModalDirective;
  @ViewChild('associateModal', { static: false }) public associateModal: ModalDirective;

  tableHeader: any = ['Attribute value type', 'Name', 'Associated product', 'Price adjustment', 'Weight adjustment', 'Is pre-selected', 'Picture', 'Display order', 'Action']

  showValue() {
    this.valuesModal.show();
  }

  //#region bind list
  lstAttributeValue: any = [];

  getValueType() {
    this.lstAttributeValue = this._mS.getAttributeValueType();
  }
  //#endregion

  //#region form for add values
  attrValueForm: FormGroup;

  attrValueForm_fb() {
    this.attrValueForm = this.fb.group({
      valueType: [null],
      name: [null, Validators.required],
      priceAdj: [null],
      isPriceAdd: [null],
      weightAdj: [null],
      cost: [null],
      isPreSelected: [null],
      displayOrder: [null],
      picture: [null],
      iscustEnter: [null],
      pQuantity: [null],
    });
  }

  changeValueType(ev) {
    console.log('ev:', ev)
    var assProduct = <HTMLElement>document.querySelector('.associateType');
    var simple = <HTMLElement>document.querySelector('.simpleType');
    if (ev == 2) {
      if (assProduct) {
        assProduct.style.display = 'block';
        simple.style.display = 'none';
      }
    } else {
      assProduct.style.display = 'none';
      simple.style.display = 'block';
    }
  }

  isCustEnter(e) {
    var isCustEnterClass = <HTMLElement>document.querySelector('.isCustEnter');
    if (e.target.checked) {
      isCustEnterClass.style.display = 'none';
    } else {
      isCustEnterClass.style.display = 'block';
    }
  }

  associateProdList() {
    this.associateModal.show();
  }
  //#endregion
  constructor(private _mS: MockService,
    private fb: FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.attrValueForm_fb();
    this.getValueType();
    this.attrValueForm.patchValue({
      valueType: 1,
    })
  }

}

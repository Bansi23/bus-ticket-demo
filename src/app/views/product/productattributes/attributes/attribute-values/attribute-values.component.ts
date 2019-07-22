import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MockService } from '../../../../../services/mock.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-attribute-values',
  templateUrl: './attribute-values.component.html',
  styleUrls: ['./attribute-values.component.scss']
})
export class AttributeValuesComponent implements OnInit {
  @ViewChild('valuesModal', { static: false }) valuesModal: ModalDirective;
  @ViewChild('associateModal', { static: false }) public associateModal: ModalDirective;
  lstAttribute: any = [];
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
    var assProduct = <HTMLElement>document.querySelector('.associateType');
    var simple = <HTMLElement>document.querySelector('.simpleType');
    if (ev == 1) {
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

  addAttributeValues() {
    for (let c in this.attrValueForm.controls) {
      this.attrValueForm.controls[c].markAsTouched();
    }
    if (this.attrValueForm.valid) {
      const formValue = this.attrValueForm.getRawValue();
      var body = {
        type_id: formValue.valueType,
        associated_product_id: this.filteredProduct.id,
        name: formValue.name,
        price_adjustment: formValue.priceAdj,
        weight_adjustment: formValue.weightAdj,
        cost: formValue.cost,
        quantity: formValue.pQuantity,
        is_pre_selected: formValue.isPreSelected,
        display_order: formValue.displayOrder,
        product_image_id: formValue.picture,
        associated_product_name: this.associateProduct
      }
      this.lstAttribute.push(body);
      console.log('this.lstAttribute:', this.lstAttribute)
      this._cS.getAttributeValues(this.lstAttribute);
      this.valuesModal.hide();
    }
  }

  lstProduct: any = [];
  getProductList(lst) {
    this.lstProduct = lst;
  }

  associateProduct: any;
  filteredProduct: any = [];
  associatedProduct(productId) {
    this.associateModal.hide();
    this.filteredProduct = this.lstProduct.find(x => x.id == productId);
    this.associateProduct = this.filteredProduct.name;
  }
  //#endregion
  constructor(private _mS: MockService,
    private fb: FormBuilder,
    private _router: Router,
    private _cS: CommonService) { }

  ngOnInit() {
    this.attrValueForm_fb();
    this.getValueType();
    this.attrValueForm.patchValue({
      valueType: 0,
    })
  }

}

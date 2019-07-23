import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MockService } from '../../../../../services/mock.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  imageList: any = [];
  showValue() {
    this.valuesModal.show();
    this.attrValueForm.patchValue({
      valueType: 0,
    })
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

  imageSrc: any;
  addAttributeValues() {
    for (let c in this.attrValueForm.controls) {
      this.attrValueForm.controls[c].markAsTouched();
    }
    if (this.attrValueForm.valid) {
      const formValue = this.attrValueForm.getRawValue();
      for (let i = 0; i < this.imageList.length; i++) {
        if (formValue.picture == this.imageList[i].id) {
          this.imageSrc = this.imageList[i].src;
        }
      }
      var body = {
        type_id: formValue.valueType,
        associated_product_id: this.filteredProduct.id,
        name: formValue.name ? formValue.name : null,
        price_adjustment: formValue.priceAdj ? formValue.priceAdj : null,
        weight_adjustment: formValue.weightAdj ? formValue.weightAdj : null,
        cost: formValue.cost ? formValue.cost : null,
        quantity: formValue.pQuantity ? formValue.pQuantity : null,
        is_pre_selected: formValue.isPreSelected ? formValue.isPreSelected : false,
        display_order: formValue.displayOrder ? formValue.displayOrder : null,
        product_image_id: formValue.picture ? formValue.picture : null,
      }
      this.lstAttribute.push(body);
      this._cS.getAttributeValues(this.lstAttribute);
      this.attrValueForm.reset();
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

  productId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id']
    });
  }
  //#endregion
  constructor(private _mS: MockService,
    private fb: FormBuilder,
    private _router: Router,
    private _cS: CommonService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.attrValueForm_fb();
    this.getValueType();
    this.getParameter();
    if (this.productId) {
      const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));
      if (editedRecord.images.length > 0) {
        this.imageList = editedRecord.images;
      }
    }
  }

}

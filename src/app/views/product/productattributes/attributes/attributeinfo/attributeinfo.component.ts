import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../../services/common.service';
import { MockService } from '../../../../../services/mock.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attributeinfo',
  templateUrl: './attributeinfo.component.html',
  styleUrls: ['./attributeinfo.component.scss']
})
export class AttributeinfoComponent implements OnInit {

  lstAttribute: any = [];
  lstControl: any = [];

  getattributeList() {
    this._cS.API_GET(this._cS.URL_getAttributeList())
      .subscribe(res => {
        if (res) {
          this.lstAttribute = res.product_attributes;
        }
      })
    this.attrInfoForm.patchValue({
      attribute: 1,
      controlType: 1,
    })
  }

  //#region  attribute form 
  attrInfoForm: FormGroup;

  attrInfoForm_fb() {
    this.attrInfoForm = this.fb.group({
      attribute: [null],
      textPrompt: [null],
      isReq: [null],
      controlType: [null],
      displayOrder: [null],
    });
  }
  //#endregion

  //#region attribute info add
  addInfo() {
    const formValue = this.attrInfoForm.getRawValue();

    var body = {
      product_attribute_id: formValue.attribute,
      text_prompt: formValue.textPrompt,
      is_required: formValue.isReq,
      display_order: formValue.displayOrder,
      attribute_control_type_id: formValue.controlType,
      // attribute_control_type_name : 
    }
    this.getParameter();

    this._cS.getAttributeInfo(body);
    if (this.productId) {
      this._router.navigate(['/catalog/addnew-attribute/value'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['/catalog/addnew-attribute/value']);
    }
  }

  productId: any;
  attributeId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.attributeId = params['attributeId']
    });
  }
  //#endregion
  constructor(private _cS: CommonService,
    private _mS: MockService,
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.attrInfoForm_fb();
    this.lstControl = this._mS.getControlTypes();
    this.getattributeList();
  }
}

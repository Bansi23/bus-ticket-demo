import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../../services/common.service';
import { MockService } from '../../../../../services/mock.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
        console.log('res:', res)

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
  constructor(private _cS: CommonService,
    private _mS: MockService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.attrInfoForm_fb();
    this.lstControl = this._mS.getControlTypes();
    this.getattributeList();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { MockService } from '../../../services/mock.service';
const emailPattern = environment.emailPattern;

@Component({
  selector: 'app-edit-billing',
  templateUrl: './edit-billing.component.html',
  styleUrls: ['./edit-billing.component.scss']
})
export class EditBillingComponent implements OnInit {
  editbillingForm: FormGroup;
  lstCountry: any = [];


  //#region form group
  fbEditAddress() {
    this.editbillingForm = this.fb.group({
      fnm: ['', Validators.required],
      lnm: ['', Validators.required],
      mono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,15}')])],
      company: [''],
      mail: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      addone: ['', Validators.required],
      addtwo: [''],
      pinno: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,15}')])],
      faxno: ['', Validators.pattern('[0-9]\\d{0,15}')],
    });
  }
  backToSearchList() {
    this._router.navigateByUrl('/sales/viewrecord');
  }
  //#endregion


  constructor(private fb: FormBuilder, private _router: Router, private _mD: MockService) { }

  ngOnInit() {
    this.fbEditAddress();
    this.lstCountry = this._mD.countryList();
  }

}

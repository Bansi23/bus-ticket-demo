import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, Form } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  lstCustomerRoles = [];
  lstManagerOfVendor = [];
  settings = {};
  selectedRoles = [];
  addCustomerForm: FormGroup;
  dataToSet: any;
  custId: any;
  customer;
  constructor(private _mS: MockService, private _cS: CommonService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lstCustomerRoles = this._mS.customerRoles();
    this.lstManagerOfVendor = this._mS.getManagerOfVendor();
    this.initAddCustomerForm();

    this.route.queryParams.subscribe(params => {
      this.custId = params['id']
    });
    if (this.custId) {
      this._cS.API_GET(this._cS.getParticularCustomer(this.custId))
        .subscribe(response => {
          this.customer = response.customers[0];
          console.log('this.customer:', this.customer)
          this.setValuesInForm();
        })
      console.log('this.customer:', this.customer)
    } else {

    }
    this.settings = {
      text: "Customer roles",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };

    this.selectedRoles = [
      { "id": 1, "role": "Administrator" },
      { "id": 2, "role": "Forum Moderators" },
      { "id": 3, "role": "Guests" },
      { "id": 4, "role": "Vendors" }];
  }
  initAddCustomerForm() {
    this.addCustomerForm = this.fb.group({
      custEmail: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      custPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],

      custRoles: ['', Validators.required],
      custManagerOfVendor: ['', Validators.required],
      custGender: ['', Validators.required],
      custFirstName: ['', Validators.required],
      custLastName: ['', Validators.required],
      custDob: ['', Validators.required],
      custCompanyName: [''],
      custAdminComment: [''],
      custIsTaxExempt: [''],
      custNewsletter: [''],
      custActive: ['']
    })
  }
  setValuesInForm() {

    this.addCustomerForm.patchValue({
      custEmail: this.customer.email,
      custGender: this.customer.gender,
      custFirstName: this.customer.first_name,
      custLastName: this.customer.last_name,
      custDob: this.customer.date_of_birth,
      custAdminComment: this.customer.admin_comment,
      custIsTaxExempt: this.customer.is_tax_exempt


    })
  }
  saveAddEditForm() {
    console.log('this.addCustomerForm:', this.addCustomerForm.value)

  }

}

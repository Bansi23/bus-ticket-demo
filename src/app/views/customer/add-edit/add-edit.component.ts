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
  addCustomerForm : FormGroup;
  dataToSet : any;
  custId: any;
  customer;
  companyName : any;
  constructor(private _mS: MockService, private _cS: CommonService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lstCustomerRoles = this._mS.customerRoles();
    this.lstManagerOfVendor = this._mS.getManagerOfVendor();
    this.initAddCustomerForm();
 
    this.route
    .queryParams
    .subscribe(params => {
       this.custId = params['id']
    });   
    
    if(this.custId){
    
      this._cS.API_GET(this._cS.getParticularCustomer(this.custId))
      .subscribe(response =>{
        this.customer = response.customers;
        // console.log('this.customer:', this.customer)

        // if(this.customer[0].addresses.length){
        //   this.companyName = this.customer[0].addresses[0].company
        // }else{
        //   this.customer = "";
        // }
      // console.log("company",this.customer[0].addresses[0].company);
              
        this.setValuesInForm();
       })
      console.log('this.customer:', this.customer)
    }else{
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

      // if(this._mS.getItemFromStorage('customerToEdit')){
      //   this.dataToSet = this._mS.getItemFromStorage('customerToEdit')
      //   console.log('this.dataToSet:', this.dataToSet)
      //   this.setValuesInForm();      
      // }else{
      //   alert("no")
      // }
  }
  initAddCustomerForm(){
  this.addCustomerForm = this.fb.group({
    custEmail : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    custPassword : ['',Validators.compose([Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
    custRoles : ['',Validators.required],
    custManagerOfVendor : ['',Validators.required],
    custGender : ['',Validators.required],
    custFirstName : ['',Validators.required],
    custLastName :['',Validators.required],
    custDob: ['',Validators.required],
    custCompanyName : [''],
    custAdminComment : [''],
    custIsTaxExempt : [''],
    custNewsletter : [''],  
    custActive : ['']
  })    
  }
  setValuesInForm(){
     this.addCustomerForm.patchValue({
      custEmail : this.customer[0].email,
      // custPassword : this.dataToSet.
      // custRoles : this.dataToSet.customerRole,
      //manager of vendor
      custGender : this.customer[0].gender,
      custFirstName : this.customer[0].first_name,
      custLastName : this.customer[0].last_name,
      custDob : this.customer[0].date_of_birth,
      custCompanyName : this.companyName,
      custAdminComment : this.customer[0].admin_comment,
      custIsTaxExempt : this.customer[0].is_tax_exempt,
      custNewsletter : this.customer[0].subscribed_to_newsletter,
      custActive : this.customer[0].active 

    })
  }
  saveAddEditForm(){
    if(this.addCustomerForm.valid){
      this.saveCustomerData();
    }
    console.log('this.addCustomerForm:', this.addCustomerForm.value)

  }

  saveCustomerData(){

    // email
    // password
    // role_ids (dropdown)
    
    
    // gender
    // first_name
    // last_name
    // date_of_birth
    // company
    // admin_comment
    // is_tax_exempt
    // subscribed_to_newsletter
    // active

    // let x = this.addCustomerForm.value.custDob.jsdate;
    // console.log('x:', x)
    // let date = this._cS.formatAMPM(x);
    // console.log('date:', date)
    
    let body = {
      email : this.addCustomerForm.value.custEmail,
      password : this.addCustomerForm.value.custPassword,
      // role_ids
      gender : this.addCustomerForm.value.custGender,
      first_name : this.addCustomerForm.value.custFirstName,
      last_name : this.addCustomerForm.value.custLastName,
      date_of_birth : this.addCustomerForm.value.custDob.formatted, 
      company : this.addCustomerForm.value.custCompanyName,
      admin_comment : this.addCustomerForm.value.custAdminComment,
      is_tax_exempt : this.addCustomerForm.value.custIsTaxExempt,
      subscribed_to_newsletter : this.addCustomerForm.value.custNewsletter,
      active : this.addCustomerForm.value.custActive
    }

    console.log('body:', body)
     this._cS.API_POST(this._cS.getCustomerList(),body)
    .subscribe(response => {
      console.log('response:', response)
    })
  }
 
}

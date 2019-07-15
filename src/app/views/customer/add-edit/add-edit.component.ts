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
  selectedcustomerRoles: any = [];

  lstManagerOfVendor = [];
  settings = {};
  selectedRoles = [];
  addCustomerForm: FormGroup;
  dataToSet: any;
  custId: any;
  customer;
  companyName: any;
  ctRoles;
  isChangePassword : boolean = false;
  changedPassword;
  IPAddress;
  createdOn;
  lastActivity;
  // gender : string;
  // patchGender : string;
  patchDate;

  dropdownOrderStatus = {
    singleSelection: false,
    text: "Select customer role",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  };
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

    if (this.custId) {
       this.isChangePassword = true;
      this._cS.API_GET(this._cS.getParticularCustomer(this.custId))
        .subscribe(response => {
          this.customer = response.customers;
          console.log('this.customer:', this.customer)
          // if(this.customer[0].gender == "M"){
          //   alert()
          //   this.patchGender = "male"
          // }else if(this.customer[0].gender == "F"){
          //   this.patchGender = "female"
          // }else{
          //   alert("No gender")
          // }
          this.patchDate = new Date(this.customer[0].date_of_birth).getDate() + "/" + new Date(this.customer[0].date_of_birth).getMonth()+1 + "/" + new Date(this.customer[0].date_of_birth).getFullYear();
          console.log('this.patchDate:', this.patchDate)
          
          // if(this.customer[0].addresses.length){
          //   this.companyName = this.customer[0].addresses[0].company
          // }else{
          //   this.customer = "";
          // }
          // console.log("company",this.customer[0].addresses[0].company);

          this.setValuesInForm();
        })
      console.log('this.customer:', this.customer)
    } else {
      alert("Id not found!")
      this._cS.Display_Loader(false);
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
  initAddCustomerForm() {
    this.addCustomerForm = this.fb.group({
      custEmail: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      custPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      custRoles: ['', Validators.required],
      custManagerOfVendor: ['', Validators.required],
      // custGender: ['', Validators.required],
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
      custEmail: this.customer[0].email,
      // custPassword : this.dataToSet.
      custRoles : this.customer[0].role_ids,
      //manager of vendor
      // custGender: this.patchGender,
      custFirstName: this.customer[0].first_name,
      custLastName: this.customer[0].last_name,
       // custDob: new Date(),
      custCompanyName: this.companyName,
      custAdminComment: this.customer[0].admin_comment,
      custIsTaxExempt: this.customer[0].is_tax_exempt,
      custNewsletter: this.customer[0].subscribed_to_newsletter,
      custActive: this.customer[0].active

    })

    this.createdOn = this.customer[0].created_on_utc;
    this.lastActivity = this.customer[0].last_activity_date_utc;
  }
  filteredOrder: any;
  filteredPayment: any;
  filteredShipping: any;
  onItemRoleSelect(item?: any) {
    this.ctRoles = this.addCustomerForm.value.custRoles;
     const selectedData = this.selectedcustomerRoles.map((x: { itemName: any; }) => { return x.itemName });
     this.filteredOrder = this.lstCustomerRoles.filter(
      function (e) { return this.indexOf(e.order_status) != -1; }, selectedData);
  }

  saveAddEditForm() {
    if (this.addCustomerForm.valid) {
      this.saveCustomerData();
    } else {
      alert("not valid")
    }
  }

  saveCustomerData() {
    let date = this._cS.formatAMPM();
    var x = this.addCustomerForm.value.custRoles;
    let roles = [];
    for (let i = 0; i < x.length; i++) {
      roles.push(x[i].id)
    }
    // if(this.addCustomerForm.value.custGender == "male"){
    //   this.gender = "M"
    // }else{
    //   this.gender = "F"
    // }
    let body = {
      customer: {
        email: this.addCustomerForm.value.custEmail,
        password: this.addCustomerForm.value.custPassword,
        role_ids: roles,
        managerOfVendor: this.addCustomerForm.value.custManagerOfVendor,
        // gender: this.gender,
        first_name: this.addCustomerForm.value.custFirstName,
        last_name: this.addCustomerForm.value.custLastName,
        date_of_birth: date,
        company: this.addCustomerForm.value.custCompanyName,
        admin_comment: this.addCustomerForm.value.custAdminComment,
        is_tax_exempt: this.addCustomerForm.value.custIsTaxExempt,
        subscribed_to_newsletter: this.addCustomerForm.value.custNewsletter,
        active: this.addCustomerForm.value.custActive
      }
    }

    console.log('body:', body)

    if(this.isChangePassword){
      alert("Edit")
      this._cS.API_PUT(this._cS.getCustomerList(),body)
      .subscribe(response =>{
        if(response){

          console.log('response:', response)
          this.router.navigateByUrl('/customers');
        }
      })
      this.isChangePassword = false;
    }else{
      this._cS.API_POST(this._cS.getCustomerList(), body)
        .subscribe(response => {
          if(response){
            console.log('response:', response)
            this.router.navigateByUrl('/customers');
          }
        })
    }
  } 
  
  changePassword(){
    this.changePassword = this.addCustomerForm.value.custPassword;
  }
}

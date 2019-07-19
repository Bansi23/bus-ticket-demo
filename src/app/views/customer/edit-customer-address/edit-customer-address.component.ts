import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
const emailPattern = environment.emailPattern;

@Component({
  selector: 'app-edit-customer-address',
  templateUrl: './edit-customer-address.component.html',
  styleUrls: ['./edit-customer-address.component.scss']
})
export class EditCustomerAddressComponent implements OnInit {
  editbillingForm: FormGroup;
  lstCountry: any = [];
  orderId: any;
  editRecord: any;
  shippingId: any;
  billingId: any;
  isbtnedit: boolean = true;
  customerId: any;
  addressId: any;
  valuesToPatchInForm: any;
  constructor(private fb: FormBuilder, private _router: Router, private _mD: MockService, private _route: ActivatedRoute, private _cS: CommonService) { }

  ngOnInit() {
    //  this.getRecord(); 
    this.fbEditAddress();
    this.getParameter();
    // this.getRecord();
    this.lstCountry = this._mD.countryList();
  }

  //#region form group
  fbEditAddress() {
    this.editbillingForm = this.fb.group({
      fnm: ['', Validators.required],
      lnm: ['', Validators.required],
      mono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,15}')])],
      company: [''],
      mail: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      // country: ['', Validators.required],
      country: [''],
      // state: ['', Validators.required],
      state: [''],
      city: ['', Validators.required],
      addone: ['', Validators.required],
      addtwo: [''],
      pinno: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,15}')])],
      faxno: [''],
    });
  }
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.customerId = params['customerId'];
      this.addressId = params['addressId']
    });

    if (this.customerId) {
      this._cS.API_GET(this._cS.getParticularCustomer(this.customerId))
        .subscribe(response => {
          if (response) {
            this.valuesToPatchInForm = response.customers[0].shipping_address;

            console.log("city", this.valuesToPatchInForm);


            this.patchValuesInForm();
          }
        })
    }
    console.log('this.customerId:', this.customerId)
    console.log('this.addressId:', this.addressId)
  }
  patchValuesInForm() {


    this.editbillingForm.patchValue({
      fnm: this.valuesToPatchInForm.first_name,
      lnm: this.valuesToPatchInForm.last_name,
      mono: this.valuesToPatchInForm.phone_number,
      company: this.valuesToPatchInForm.company,
      mail: this.valuesToPatchInForm.email,
      country: this.valuesToPatchInForm.country_id,
      state: this.valuesToPatchInForm.state_province_id,
      city: this.valuesToPatchInForm.city,
      addone: this.valuesToPatchInForm.address1,
      addtwo: this.valuesToPatchInForm.address2,
      pinno: this.valuesToPatchInForm.zip_postal_code,
      faxno: this.valuesToPatchInForm.fax_number
    })

  }
  backToCustomerDetails() {
    // this._router.navigate(['/customers/editCustomerAddress'], { queryParams: { id: this.orderId } });
    this._router.navigate(['/customers'], { queryParams: { id: this.orderId } });
  }
  // getParam() {
  //   this._route.queryParams.subscribe(params => {
  //     this.orderId = params['id']
  //     this.billingId = params['billingid']
  //     this.shippingId = params['shippingid']
  //   });
  // }
  otherCountry = {
    "id": 0, "name": "Other (Non US)", "Form": null, "CustomProperties": {}
  }

  statelist: any = []

  // getRecord() {
  //   // this.getParam();
  //   if (this.orderId) {
  //     this._cS.API_GET(this._cS.getOrderId(this.orderId))
  //       .subscribe(response => {
  //         if (response) {
  //           this.editRecord = response.orders[0];
  //           this.lstCountry = this._mD.countryList();
  //           if (this.billingId != null) {
  //             this._cS.API_GET(this._cS.getCountry(this.editRecord.billing_address.country_id)).subscribe(res => {
  //               this.statelist = res;
  //               var statebilling = this.statelist.find((item) => item.id == this.editRecord.billing_address.state_province_id);
  //               const country = this.lstCountry.find((item) => item.state_id == this.editRecord.billing_address.country_id);
  //               if (statebilling == undefined) {
  //                 statebilling = this.otherCountry;
  //               }

  //               this.editbillingForm.patchValue({
  //                 fnm: this.editRecord.billing_address.first_name ? this.editRecord.billing_address.first_name : null,
  //                 lnm: this.editRecord.billing_address.last_name ? this.editRecord.billing_address.last_name : null,
  //                 mail: this.editRecord.billing_address.email ? this.editRecord.billing_address.email : null,
  //                 company: this.editRecord.billing_address.company ? this.editRecord.billing_address.company : null,
  //                 country: country.state_id,
  //                 state: statebilling.id,
  //                 city: this.editRecord.billing_address.city ? this.editRecord.billing_address.city : null,
  //                 addone: this.editRecord.billing_address.address1 ? this.editRecord.billing_address.address1 : null,
  //                 addtwo: this.editRecord.billing_address.address2 ? this.editRecord.billing_address.address2 : null,
  //                 pinno: this.editRecord.billing_address.zip_postal_code ? this.editRecord.billing_address.zip_postal_code : null,
  //                 mono: this.editRecord.billing_address.phone_number ? this.editRecord.billing_address.phone_number : null,
  //                 faxno: this.editRecord.billing_address.fax_number ? this.editRecord.billing_address.fax_number : null,
  //               });
  //             });
  //           }
  //           else if (this.shippingId != null) {
  //             var stateshipping = this.statelist.find((item) => item.id == this.editRecord.shipping_address.state_province_id);
  //             const country = this.lstCountry.find((item) => item.state_id == this.editRecord.shipping_address.country_id);
  //             if (stateshipping == undefined) {
  //               stateshipping = this.otherCountry;
  //             }
  //             this.editbillingForm.patchValue({
  //               fnm: this.editRecord.shipping_address.first_name ? this.editRecord.shipping_address.first_name : null,
  //               lnm: this.editRecord.shipping_address.last_name ? this.editRecord.shipping_address.last_name : null,
  //               mail: this.editRecord.shipping_address.email ? this.editRecord.shipping_address.email : null,
  //               company: this.editRecord.shipping_address.company ? this.editRecord.shipping_address.company : null,
  //               country: country.state_id,
  //               state: stateshipping.id,
  //               city: this.editRecord.shipping_address.city ? this.editRecord.shipping_address.city : null,
  //               addone: this.editRecord.shipping_address.address1 ? this.editRecord.shipping_address.address1 : null,
  //               addtwo: this.editRecord.shipping_address.address2 ? this.editRecord.shipping_address.address2 : null,
  //               pinno: this.editRecord.shipping_address.zip_postal_code ? this.editRecord.shipping_address.zip_postal_code : null,
  //               mono: this.editRecord.shipping_address.phone_number ? this.editRecord.shipping_address.phone_number : null,
  //               faxno: this.editRecord.shipping_address.fax_number ? this.editRecord.shipping_address.fax_number : null,
  //             });
  //           }
  //         }
  //         else {
  //           this._cS.displayToast(2, 'Error in response');
  //         }
  //       });
  //   }
  // }
  statebilling: any;

  onSelectCountry(country_id) {
    this._cS.API_GET(this._cS.getCountry(country_id)).subscribe(res => {
      this.statelist = res;
      this.statebilling = this.statelist.find((item) => item.id == this.editRecord.billing_address.state_province_id);
      if (this.statebilling == undefined) {
        this.statebilling = this.otherCountry;
      }
      else {
        this.editbillingForm.patchValue({
          state: this.statebilling.name,
        });
      }
    });
  }
  editBilling() {
    // this.getParam();
    this._cS.API_GET(this._cS.getCountry(this.editbillingForm.value.country)).subscribe(res => {
      this.statelist = res;
    });
    var statebilling = this.statelist.find((item) => item.id == this.editbillingForm.value.state);
    var countryname = this.lstCountry.find((item) => item.state_id == this.editbillingForm.value.country);
    if (statebilling == undefined) {
      statebilling = this.otherCountry;
    }

    var body = {
      "order":
      {
        "billing_address": {
          "first_name": this.editbillingForm.value.fnm,
          "last_name": this.editbillingForm.value.lnm,
          "email": this.editbillingForm.value.mail,
          "company": this.editbillingForm.value.company,
          "country_id": +this.editbillingForm.value.country,
          "country": countryname.state,
          "state_province_id": +statebilling.id ? +statebilling.id : null,
          "city": this.editbillingForm.value.city,
          "address1": this.editbillingForm.value.addone,
          "address2": this.editbillingForm.value.addtwo,
          "zip_postal_code": +this.editbillingForm.value.pinno,
          "phone_number": +this.editbillingForm.value.mono,
          "fax_number": +this.editbillingForm.value.faxno,
          "id": +this.billingId
        },
        "id": +this.orderId
      }
    }

    this._cS.API_PUT(this._cS.getOrderId(this.orderId), body)
      .subscribe(res => {
        if (res) {
          this._cS.displayToast(1, 'Record updated successfully');
          this._router.navigate(['/sales/viewrecord'], { queryParams: { id: this.orderId } });
        } else {
          this._cS.displayToast(2, 'Error in response');
        };
      }, err => {
        this._cS.displayToast(2, 'Record not updated');
      });

  }

  editShpping() {

    for (let v in this.editbillingForm.controls) {
      this.editbillingForm.controls[v].markAsTouched();
    };
    if (this.editbillingForm.valid) {
      var x = this.editbillingForm.value.custRoles;
      this.putDataToAPI();
    }

  }
  // this.getParam();
  // this._cS.API_GET(this._cS.getCountry(this.editbillingForm.value.country)).subscribe(res => {
  //   this.statelist = res;
  // });
  // var statebilling = this.statelist.find((item) => item.id == this.editbillingForm.value.state);
  // var countryname = this.lstCountry.find((item) => item.state_id == this.editbillingForm.value.country);
  // if (statebilling == undefined) {
  //   statebilling = this.otherCountry;
  // }

  putDataToAPI() {


    var body = {
      order: {
        shipping_address: {
          "first_name": this.editbillingForm.value.fnm,
          "last_name": this.editbillingForm.value.lnm,
          "email": this.editbillingForm.value.mail,
          "company": this.editbillingForm.value.company,
          "country_id": this.editbillingForm.value.country,
          "country": this.editbillingForm.value.state,
          "state_province_id": this.editbillingForm.value.state,
          "city": this.editbillingForm.value.city,
          "address1": this.editbillingForm.value.addone,
          "address2": this.editbillingForm.value.addtwo,
          "zip_postal_code": this.editbillingForm.value.pinno,
          "phone_number": this.editbillingForm.value.mono,
          "fax_number": this.editbillingForm.value.faxno,
          "id": this.shippingId
        },
        id: +this.orderId
      }
    }

    this._cS.API_PUT(this._cS.getParticularCustomer(this.customerId), body)
      .subscribe(res => {
        if (res) {
          this._cS.displayToast(1, 'Record updated successfully');
          this._router.navigate(['/sales/viewrecord'], { queryParams: { id: this.orderId } });
        } else {
        };
      }, err => {
        this._cS.displayToast(2, 'Record not updated');
      });

  }

}

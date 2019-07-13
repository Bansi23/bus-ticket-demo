import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
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
  orderId: any;
  editRecord: any;
  shippingId: any;
  billingId: any;
  isbtnedit: boolean = true;


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
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    this._router.navigate(['/sales/viewrecord'], { queryParams: { id: this.orderId } });
  }

  getRecord() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
      this.billingId = params['billingid']
      this.shippingId = params['shippingid']
     // console.log(this.shippingId, 'this.shippingId');
    });
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderId(this.orderId))
        .subscribe(response => {
          if (response) {
            this.editRecord = response.orders[0];
            if (this.billingId != null) {
              this.editbillingForm.patchValue({
                fnm: this.editRecord.billing_address.first_name ? this.editRecord.billing_address.first_name : null,
                lnm: this.editRecord.billing_address.last_name ? this.editRecord.billing_address.last_name : null,
                mail: this.editRecord.billing_address.email ? this.editRecord.billing_address.email : null,
                company: this.editRecord.billing_address.company ? this.editRecord.billing_address.company : null,
                country: this.editRecord.billing_address.country ? this.editRecord.billing_address.country : null,
                state: this.editRecord.billing_address.state_province_id ? this.editRecord.billing_address.state_province_id : null,
                city: this.editRecord.billing_address.city ? this.editRecord.billing_address.city : null,
                addone: this.editRecord.billing_address.address1 ? this.editRecord.billing_address.address1 : null,
                addtwo: this.editRecord.billing_address.address2 ? this.editRecord.billing_address.address2 : null,
                pinno: this.editRecord.billing_address.zip_postal_code ? this.editRecord.billing_address.zip_postal_code : null,
                mono: this.editRecord.billing_address.phone_number ? this.editRecord.billing_address.phone_number : null,
                faxno: this.editRecord.billing_address.fax_number ? this.editRecord.billing_address.fax_number : null,
              });
            }
            else if (this.shippingId != null) {
              this.editbillingForm.patchValue({
                fnm: this.editRecord.shipping_address.first_name ? this.editRecord.shipping_address.first_name : null,
                lnm: this.editRecord.shipping_address.last_name ? this.editRecord.shipping_address.last_name : null,
                mail: this.editRecord.shipping_address.email ? this.editRecord.shipping_address.email : null,
                company: this.editRecord.shipping_address.company ? this.editRecord.shipping_address.company : null,
                country: this.editRecord.shipping_address.country ? this.editRecord.shipping_address.country : null,
                state: this.editRecord.shipping_address.state_province_id ? this.editRecord.shipping_address.state_province_id : null,
                city: this.editRecord.shipping_address.city ? this.editRecord.shipping_address.city : null,
                addone: this.editRecord.shipping_address.address1 ? this.editRecord.shipping_address.address1 : null,
                addtwo: this.editRecord.shipping_address.address2 ? this.editRecord.shipping_address.address2 : null,
                pinno: this.editRecord.shipping_address.zip_postal_code ? this.editRecord.shipping_address.zip_postal_code : null,
                mono: this.editRecord.shipping_address.phone_number ? this.editRecord.shipping_address.phone_number : null,
                faxno: this.editRecord.shipping_address.fax_number ? this.editRecord.shipping_address.fax_number : null,
              });
            }
          }
        });
    }
  }
  editBilling() {
    let body = {
      order: {
        billing_address: {
          first_name: this.editbillingForm.value.fnm,
          last_name: this.editbillingForm.value.lnm,
          email: this.editbillingForm.value.mail,
          company: this.editbillingForm.value.company,
          country: this.editbillingForm.value.country,
          state_province_id: this.editbillingForm.value.state,
          city: this.editbillingForm.value.city,
          address1: this.editbillingForm.value.addone,
          address2: this.editbillingForm.value.addtwo,
          zip_postal_code: this.editbillingForm.value.pinno,
          phone_number: this.editbillingForm.value.mono,
          fax_number: this.editbillingForm.value.faxno,
          province: null,
        }
      }
    }
    //console.log('billing', body);
  }
  editShpping() {
    let body = {
      order: {
        shipping_address: {
          first_name: this.editbillingForm.value.fnm,
          last_name: this.editbillingForm.value.lnm,
          email: this.editbillingForm.value.mail,
          company: this.editbillingForm.value.company,
          country: this.editbillingForm.value.country,
          state_province_id: this.editbillingForm.value.state,
          city: this.editbillingForm.value.city,
          address1: this.editbillingForm.value.addone,
          address2: this.editbillingForm.value.addtwo,
          zip_postal_code: this.editbillingForm.value.pinno,
          phone_number: this.editbillingForm.value.mono,
          fax_number: this.editbillingForm.value.faxno,
          province: null,
        }
      }
    }
   // console.log('shipping', body);
  }
  //#endregion
  constructor(private fb: FormBuilder, private _router: Router, private _mD: MockService, private _route: ActivatedRoute, private _cS: CommonService) { }

  ngOnInit() {
    this.fbEditAddress();
    this.getRecord();
    //   this.patchRecord();
    this.lstCountry = this._mD.countryList();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-billing-shipping',
  templateUrl: './billing-shipping.component.html',
  styleUrls: ['./billing-shipping.component.scss']
})
export class BillingShippingComponent implements OnInit {
  editRec: boolean = true;
  viewRecord: any = [];
  orderId: any;
  shippingAddress = 'https://maps.google.com/maps';
  EditShipMethod() {
    this.editRec = false;
  }
  cancleEdit() {
    this.editRec = true;
  }
  SaveChanges() {
    this.editRec = true;
  }

  billingEdit(id, billingid) {
    this._router.navigate(['/sales/editbilling'], { queryParams: { id: id, billingid: billingid } });
  }
  shippingEdit(id, shippingid) {
    this._router.navigate(['/sales/editbilling'], { queryParams: { id: id, shippingid: shippingid } });
  }
  statelistbilling: any = [];
  statelistshipping: any = [];
  displayshipping: any;
  displaybilling: any;
  otherCountry = {
    "id": 500, "name": "Other (Non US)", "Form": null, "CustomProperties": {}
  }

  getRecord() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderId(this.orderId))
        .subscribe(response => {
          if (response) {
            this.viewRecord = response.orders;
            const countryId = this.viewRecord[0].billing_address.country_id;
            this._cS.API_GET(this._cS.getCountry(countryId)).subscribe(res => {
              this.statelistbilling = res;
              for (let i = 0; i < this.viewRecord.length; i++) {
                this.displaybilling = this.statelistbilling.find((item) => item.id == this.viewRecord[i].billing_address.state_province_id);
                if (this.displaybilling == undefined) {
                  this.displaybilling = this.otherCountry;
                }
                console.log('displaybilling', this.displaybilling);
              }
            });
            const _countryId = this.viewRecord[0].shipping_address.country_id
            this._cS.API_GET(this._cS.getCountry(_countryId)).subscribe(res => {
              this.statelistshipping = res;
              for (let i = 0; i < this.viewRecord.length; i++) {
                this.displayshipping = this.statelistshipping.find((item) => item.id == this.viewRecord[i].shipping_address.state_province_id);
                if (this.displayshipping == undefined) {
                  this.displayshipping = this.otherCountry;
                }
              }
            });
          }
        });
    }
  }

  ngOnInit() {
    this.getRecord();
    const baseUrl = `https://maps.google.com/maps`;
    for (let i = 0; i < this.viewRecord.length; i++) {
      const pin = this.viewRecord[i].shipping_address.zip_postal_code;
      const city = this.viewRecord[i].shipping_address.city;
      const country = this.viewRecord[i].shipping_address.country;
      const addone = this.viewRecord[i].shipping_address.address1;
      this.shippingAddress = baseUrl + `search/${pin}+${city}+${country}+${addone}`;
    }
  }

  constructor(private _router: Router, private _cS: CommonService, private _route: ActivatedRoute) { }
}

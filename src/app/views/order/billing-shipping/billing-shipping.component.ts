import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../services/mock.service';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-billing-shipping',
  templateUrl: './billing-shipping.component.html',
  styleUrls: ['./billing-shipping.component.scss']
})
export class BillingShippingComponent implements OnInit {

  editRec: boolean = true;
  billingData: any[];
  EditShipMethod() {
    this.editRec = false;
  }
  cancleEdit() {
    this.editRec = true;
  }
  billingEdit() {
    this._router.navigateByUrl('/sales/editbilling');
  }
  shippingEdit() {
    this._router.navigateByUrl('/sales/editbilling');
  }
  getRecord(id) {
    this._cS.API_GET(this._cS.getOrderId(id))
      .subscribe(response => {
        if (response) {
          console.log('response', response);
          this.billingData = response.orders;
        }
      });
  }

  ngOnInit() {

  }

  constructor(private _router: Router, private _cS: CommonService) { }
}

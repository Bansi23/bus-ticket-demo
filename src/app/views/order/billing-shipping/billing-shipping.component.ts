import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../services/mock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-billing-shipping',
  templateUrl: './billing-shipping.component.html',
  styleUrls: ['./billing-shipping.component.scss']
})
export class BillingShippingComponent implements OnInit {
  shippingMethod: any;
  editRec: boolean = true;
  viewRecord: any = [];
  orderId: any;
  EditShipMethod() {
    this.editRec = false;
  }
  cancleEdit() {
   // this.shippingMethod = "Ground";
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
  getRecord() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderId(this.orderId))
        .subscribe(response => {
          if (response) {
            this.viewRecord = response.orders;
            this.shippingMethod = this.viewRecord.shipping_method
          }
        });
    }
  }

  ngOnInit() {
    this.getRecord();
  }

  constructor(private _router: Router, private _cS: CommonService, private _route: ActivatedRoute) { }
}

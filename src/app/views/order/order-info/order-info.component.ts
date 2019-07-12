import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  isOrder: boolean = true;
  lstOrderStatus: any = [];
  viewRecord: any = [];
  returnUrl: any;
  orderId: any;
  finalTotal: any;
  orderstatusValue: any;


  changeStatus() {
    this.isOrder = false;
  }
  cancleEdit() {
    this.isOrder = true;
  }
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
  }
  getInfo() {
    this.getParameter();
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderId(this.orderId))
        .subscribe(res => {
          if (res) {
            this.viewRecord = res.orders;
            for (let i = 0; i < this.viewRecord.length; i++) {
              const element = this.viewRecord[i].order_items;
              this.finalTotal = element.map(o => o.unit_price_excl_tax).reduce((a, c) => a + c, 0);
            }
          }
        });
    }
  }
  selectedChanged(value) {
    console.log('value', value);
    this.orderstatusValue = value;
  }
  CancleOrder() {
    //   const cancle = this.viewRecord.order_status = 'Cancelled'
    //   const body = {
    //     "order_status": cancle
    //   }
    //   console.log('body', body)
    //   this.getParameter();
    //   this._cS.API_POST(this._cS.getOrderId(this.orderId), body)
    //     .subscribe(res => {
    //       if (res) {
    //         console.log('res', res);
    //       } else {
    //       };
    //     }, err => {
    //     });
  }
  saveOrderStatus() {
    this.getParameter();
    const body = {
      "order_status": this.orderstatusValue
    }
    console.log('this.orderstatusValue.itemName', body)
    this._cS.API_POST(this._cS.getOrderId(this.orderId), body)
      .subscribe(res => {
        if (res) {
          console.log('res', res);
        } else {
        };
      }, err => {
      });
  }

  editCustomer(id) {
    this._router.navigate(['/customers/addEdit'], { queryParams: { id: id } });
  }
  constructor(private _mD: MockService, private _cS: CommonService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getInfo();
    this.lstOrderStatus = this._mD.orderStatus();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

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
  orderstatusForm: FormGroup;
  refunded_Amount: boolean = false;

  @ViewChild('changeModal', { static: true }) refundedAmount: ModalDirective;
  addrefund: FormGroup;


  changeStatus() {
    this.isOrder = false;
  }
  close() {
    this.refundedAmount.hide();
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
              this.partialAmount = this.finalTotal;
              if (element == '') {
                this.finalTotal = this.viewRecord[i].order_subtotal_excl_tax;
              }
            }

          }
          else {
            this._cS.displayToast(2, 'Not get response');
          }
        });
    }
  }
  CancleOrder() {
    this.getParameter();
    var body = {
      order: {
        order_status: 'Cancelled',
        id: this.orderId
      }
    }
    if (confirm('Are you sure you want to Cancelled this record?')) {
      this._cS.API_PUT(this._cS.getOrderId(this.orderId), body)
        .subscribe(res => {
          if (res) {
            this.getInfo();
            this._cS.displayToast(1, 'SuccessFully cancelled order');
          } else {
            this._cS.displayToast(2, 'API response Error');
          };
        }, err => {
        });
    }

  }

  refundAmount() {
    this.getParameter();
    var body = {
      order: {
        payment_status: 'Refunded',
        id: +this.orderId,
        refunded_amount: this.finalTotal
      }
    }
    if (confirm('Are you sure you want to Refunded Amount of this record?')) {
      this._cS.API_PUT(this._cS.getOrderId(this.orderId), body)
        .subscribe(res => {
          if (res) {
            this.getInfo();
            this._cS.displayToast(1, 'SuccessFully refunded order amount');
          } else {
          };
        }, err => {
          this._cS.displayToast(2, 'Get Error');
        });
    }
  }


  paidAmount() {
    this.getParameter();
    var body = {
      order: {
        payment_status: 'Paid',
        id: +this.orderId
      }
    }
    if (confirm('Are you sure you want to perform this action??')) {
      this._cS.API_PUT(this._cS.getOrderId(this.orderId), body)
        .subscribe(res => {
          if (res) {
            this.getInfo();
            this._cS.displayToast(1, 'SuccessFully Updated payment status of this order');
          } else {
          };
        }, err => {
          this._cS.displayToast(err)
        });
    }
  }
  partialAmount: any;
  totalrefundAmount: any;
  partialRefundAmount() {
    this.refundedAmount.show()
    for (let i = 0; i < this.viewRecord.length; i++) {
      this.partialAmount = this.finalTotal - this.viewRecord[i].refunded_amount;
      break;
    }
    this.addrefund.reset();
  }
  saveRefund() {
    for (let val in this.addrefund.controls) {
      this.addrefund.controls[val].markAsTouched();
    };
    this.getParameter();
    const refunded = this.addrefund.get('refundedamount').value
    var body = {
      order: {
        payment_status: 'PartiallyRefunded',
        id: +this.orderId,
        refunded_amount: refunded
      }
    }
    if (this.addrefund.valid) {
      if (confirm('Are you sure you want to Refunded Amount of this record?')) {
        this._cS.API_PUT(this._cS.getOrderId(this.orderId), body)
          .subscribe(res => {
            if (res) {
              this.getInfo();
              this.refundedAmount.hide();
              this._cS.displayToast(1, 'SuccessFully refunded order amount');
            } else {
            };
          }, err => {
            this._cS.displayToast(2, 'Get Error');
          });
      }
    }
  }


  saveOrderStatus() {
    this.getParameter();
    const orderstatus = this.orderstatusForm.get('orderStatus').value;
    var body = {
      order: {
        order_status: orderstatus,
        id: +this.orderId
      }
    }

    if (confirm('Are you sure you want to change order status?')) {
      this._cS.API_PUT(this._cS.getOrderId(this.orderId), body)
        .subscribe(res => {
          if (res) {
            this.getInfo();
            this._cS.displayToast(1, 'SuccessFully edit order status');
            this.cancleEdit();
          } else {
          };
        }, err => {
        });
    }
  }

  editCustomer(id, custid) {
    this._router.navigate(['/customers/addEdit'], { queryParams: { orderid: id, id: custid } });
  }
  constructor(private _mD: MockService, private _cS: CommonService, private _router: Router, private _route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.getInfo();
    this.lstOrderStatus = this._mD.orderStatus();
    this.orderstatusForm = this.fb.group({
      orderStatus: ['']
    });

    this.addrefund = this.fb.group({
      refundedamount: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{0,50}')])],

    })
  }

}

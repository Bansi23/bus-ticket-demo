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
  orderId: any

  changeStatus() {
    this.isOrder = false;
  }
  cancleEdit() {
    this.isOrder = true;
  }
  getInfo() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderId(this.orderId))
        .subscribe(res => {
          if (res) {
            this.viewRecord = res.orders;
          }
        });
    }
  }
  editCustomer(id) {
    this._router.navigate(['/customers/addEdit'], { queryParams: { id: id } });
  }
  constructor(private _mD: MockService, private _cS: CommonService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // const index = localStorage.getItem('index');
    this.getInfo();
    this.lstOrderStatus = this._mD.orderStatus();
  }

}

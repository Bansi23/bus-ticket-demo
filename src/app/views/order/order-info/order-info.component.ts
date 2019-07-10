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

  changeStatus() {
    this.isOrder = false;
  }
  cancleEdit() {
    this.isOrder = true;
  }
  getInfo(id) {
    this._cS.API_GET(this._cS.getOrderId(id))
      .subscribe(res => {
        if (res) {
          this.viewRecord = res.orders;
        }
      });
  }
  editCustomer(id) {
    // const url = this.returnUrl != '/' ? this.returnUrl.split('/') : null;
    // const urlHost = url[0].split('?');
    // this._router.navigate(['/customers/addEdit' + urlHost[0]], { queryParams: id });
    this._router.navigate(['/customers/addEdit', { queryParams: id }])

  }
  constructor(private _mD: MockService, private _cS: CommonService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    const index = localStorage.getItem('index');
    this.getInfo(index);
    this.lstOrderStatus = this._mD.orderStatus();
  }

}

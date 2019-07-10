import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-add-product-to-order',
  templateUrl: './add-product-to-order.component.html',
  styleUrls: ['./add-product-to-order.component.scss']
})
export class AddProductToOrderComponent implements OnInit {

  orderId: any;
  viewRecord: any = [];
  orderRecord: any = [];

  getRecord() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderId(this.orderId))
        .subscribe(response => {
          if (response) {
            this.viewRecord = response.orders;
            for (let i = 0; i < this.viewRecord.length; i++) {
              this.orderRecord = this.viewRecord[i].order_items;
            }
          }
        });
    }
  }


  addProduct() {
    console.log('this.viewRecord.id', this.viewRecord[0].id)
    this._router.navigate(['/sales/addproduct'], { queryParams: { orderid: this.viewRecord[0].id } });
  }
  constructor(private _router: Router, private _route: ActivatedRoute, private _cS: CommonService) { }

  ngOnInit() {
    this.getRecord();
  }

}

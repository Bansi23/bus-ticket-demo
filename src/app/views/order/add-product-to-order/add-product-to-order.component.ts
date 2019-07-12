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

  getParemeter(){
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
  }

  getRecord() {
    this.getParemeter();
    if (this.orderId) {
      this._cS.API_GET(this._cS.getOrderItem(this.orderId))
        .subscribe(response => {
          if (response) {
            this.orderRecord = response.order_items;
          }
        });
    }
  }
  DeleteRecord(itemid) {
    this.getParemeter();
    this._cS.API_DELETE(this._cS.getOrderItemId(this.orderId, itemid))
      .subscribe(res => {
        if (res) {
          if (confirm('Are you sure want to delete this record?')) {
            this.getRecord();
          }

        }
      })
  }
  editRecord(itemid){
    this.getParemeter();
    
  }

  addProduct() {
    this._route.queryParams.subscribe(params => {
      this.orderId = params['id']
    });
    this._router.navigate(['/sales/addproduct'], { queryParams: { id: this.orderId } });
  }
  constructor(private _router: Router, private _route: ActivatedRoute, private _cS: CommonService) { }

  ngOnInit() {
    this.getRecord();
  }

}

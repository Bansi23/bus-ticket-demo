import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {
  custId;
  lstTempOrders = [];
  lstOrders = [];
  constructor(private router : Router,private _mS: MockService, private _cS: CommonService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
       this.custId = params['id']
    });   

    if(this.custId){
       this.getCustomerOrders();
    }
     
  }
  navigateToOrders(){
    //  this.router.navigateByUrl('')
  }
  getCustomerOrders(){
     this._cS.API_GET(this._cS.getPaticularCustomerOrder(this.custId))
    .subscribe(response =>{
       this.lstTempOrders = response.orders;
         // this.lstOrders.push(this.lstTempOrders[0].id);
        // this.lstOrders.push(this.lstTempOrders[0].order_total);
        // this.lstOrders.push(this.lstTempOrders[0].order_status); 
        // this.lstOrders.push(this.lstTempOrders[0].payment_status);
        // this.lstOrders.push(this.lstTempOrders[0].shipping_status);
        // this.lstOrders.push(this.lstTempOrders[0].created_on_utc);
      })
    
  }

}

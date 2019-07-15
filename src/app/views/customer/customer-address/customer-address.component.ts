import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {
  custId;

  constructor(private router : Router,private _mS: MockService, private _cS: CommonService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route
    .queryParams
    .subscribe(params => {
       this.custId = params['id']
    });   

    if(this.custId){
       this.getCustomerOrderAddress();
    }

  }
  getCustomerOrderAddress(){
     this._cS.API_GET(this._cS.getPaticularCustomerOrder(this.custId))
    .subscribe(response =>{
       })
    
  }

}

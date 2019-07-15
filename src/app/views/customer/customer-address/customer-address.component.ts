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
  custAddress = [];
  totalRecords : number;
  pageIndex: number = 1;
  pageSize: number = 10;
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

  pageChanged(value) {
    this.pageIndex = +value;
    this.getCustomerOrderAddress();  
  };

  changePageSize(value) {
    this.pageIndex = 1;
    this.pageSize = value;
    this.getCustomerOrderAddress();
  }
  getTotalRecord(){
    this.totalRecords = this.custAddress.length
  }
  getCustomerOrderAddress(){
     this._cS.API_GET(this._cS.getPaticularCustomerOrder(this.custId))
    .subscribe(response =>{
         let temp = response.orders;
        this.custAddress = [];
        for(let i=0;i<response. orders.length; i++){
          const data = {
              firstName : temp[i].billing_address.first_name,
              lastName : temp[i].billing_address.last_name,
              email : temp[i].billing_address.email,
              phoneNo : temp[i].billing_address.phone_number,
              faxNo : temp[i].billing_address.fax_number,
              address : new Array(temp[i].billing_address.company,
                temp[i].billing_address.address1,
                temp[i].billing_address.address2,
                temp[i].billing_address.city,
                temp[i].billing_address.zip_postal_code,
                temp[i].billing_address.country)
          }
          this.custAddress.push(data);
        }
        })
    
  }

}

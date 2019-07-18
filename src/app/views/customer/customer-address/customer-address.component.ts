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
  totalRecords: number;
  pageIndex: number = 1;
  pageSize: number = 10;
  temp = [];
  constructor(private router: Router, private _mS: MockService, private _cS: CommonService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        this.custId = params['id']
      });

    if (this.custId) {
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
  getTotalRecord() {
    this.totalRecords = this.temp.length
  }
  getCustomerOrderAddress() {
    this._cS.API_GET(this._cS.getPaticularCustomerOrder(this.custId))
      .subscribe(response => {
        this.temp = response.orders;
        this.custAddress = [];
        this.getTotalRecord();
        for (let i = 0; i < response.orders.length; i++) {
          const data = {
            firstName: this.temp[i].billing_address.first_name,
            lastName: this.temp[i].billing_address.last_name,
            email: this.temp[i].billing_address.email,
            phoneNo: this.temp[i].billing_address.phone_number,
            faxNo: this.temp[i].billing_address.fax_number,
            address: new Array(this.temp[i].billing_address.company,
              this.temp[i].billing_address.address1,
              this.temp[i].billing_address.address2,
              this.temp[i].billing_address.city,
              this.temp[i].billing_address.zip_postal_code,
              this.temp[i].billing_address.country),
            customerId: this.temp[i].customer_id,
            addressId: this.temp[i].billing_address.id
          }
          this.custAddress.push(data);
        }
      })

  }
  navigateToEditAddress(customerId, addressId) {
    
    this.router.navigate(['/sales/editbilling'], { queryParams: { customerId: customerId, addressId: addressId } });
  }

}

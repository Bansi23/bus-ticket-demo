import { Component, OnInit } from '@angular/core';
import { MockService } from "../../../services/mock.service";
import { from } from 'rxjs';
import { CommonService } from '../../../services/common.service';
import { Routes, Router } from '@angular/router';
  @Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {

  constructor(private _mS: MockService, private _cS: CommonService, private router: Router) { }

  lstCustomerRoles = [];
  settings = {};
  selectedRoles = [];
  lstCustDOBMonth = [];
  lstCustDOBDay = [];
  ngOnInit() {

    this.lstCustomerRoles = this._mS.customerRoles();
    this.lstCustDOBMonth = this._mS.customerDOBMonth();
    this.lstCustDOBDay = this._mS.customerDOBDay();
    this.getCustomerList();
    this.settings = {
      text: "Customer roles",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
    this.selectedRoles = [
      { "id": 1, "role": "Administrator" },
      { "id": 2, "role": "Forum Moderators" },
      { "id": 3, "role": "Guests" },
      { "id": 4, "role": "Vendors" }];
  }
  getCustomerList() {
    this._cS.API_GET(this._cS.getCustomerList())
      .subscribe(response => {
        console.log("response", response);

      })
  }

  gotoAddCustomer() {
    this.router.navigateByUrl('/customers/addEdit');
  }

}

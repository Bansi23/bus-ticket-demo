import { Component, OnInit } from '@angular/core';
import {MockService} from "../../../services/mock.service";
import { from } from 'rxjs';
@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {

  constructor(private _mS :MockService ) { }

  lstCustomerRoles = [];
  ngOnInit() {
    
    this.lstCustomerRoles = this._mS.customerRoles();
    console.log('this.lstCustomerRoles:', this.lstCustomerRoles)
  }

}

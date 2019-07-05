import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { from } from 'rxjs';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  lstCustomerRoles = [];
  lstManagerOfVendor = [];
  settings = {};
  selectedRoles = [];

  constructor(private _mS: MockService, private _cS: CommonService, private router: Router) { }

  ngOnInit() {
    this.lstCustomerRoles = this._mS.customerRoles();
    this.lstManagerOfVendor = this._mS.getManagerOfVendor();

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
 
}

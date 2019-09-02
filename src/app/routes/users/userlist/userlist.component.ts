import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  //#region variables
  searchText: any;
  //#endregion

  //#region functions
  search() {
    this.searchText;
  }
  //#endregion
  constructor(public _cS: CommonService) { }

  ngOnInit() {
  }
}
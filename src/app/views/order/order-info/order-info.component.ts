import { Component, OnInit } from '@angular/core';
import { MockService } from '../../../services/mock.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  isOrder: boolean = true;
  lstOrderStatus: any = [];

  changeStatus() {
    this.isOrder = false;
  }
  cancleEdit() {
    this.isOrder = true;
  }
  constructor(private _mD: MockService) { }

  ngOnInit() {
    this.lstOrderStatus = this._mD.orderStatus();
  }

}

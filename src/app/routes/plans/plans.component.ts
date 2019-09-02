import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(private _cS : CommonService) { }
  pop() {
    this._cS.displayToaster(1, 'Thanks For Buying!');
  };
  ngOnInit() {
  }

}

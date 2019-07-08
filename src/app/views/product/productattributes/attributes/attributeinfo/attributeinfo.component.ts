import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-attributeinfo',
  templateUrl: './attributeinfo.component.html',
  styleUrls: ['./attributeinfo.component.scss']
})
export class AttributeinfoComponent implements OnInit {

  lstAttribute: any = [];

  getattributeList() {
    this._cS.API_GET(this._cS.URL_getAttributeList())
      .subscribe(res => {
        console.log('res:', res)

      })
  }
  constructor(private _cS: CommonService) { }

  ngOnInit() {
    this.getattributeList();
  }

}

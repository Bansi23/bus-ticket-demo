import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-addnew-attribute',
  templateUrl: './addnew-attribute.component.html',
  styleUrls: ['./addnew-attribute.component.scss']
})
export class AddnewAttributeComponent implements OnInit {

  backToList() {
    this._router.navigateByUrl('/catalog/addProduct')
  }

  //#region tabs routing on click
  productId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id']
    });
  }

  goToInfo() {
    this.getParameter();
    if (this.productId) {
      this._router.navigate(['catalog/addnew-attribute/info'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addnew-attribute/info']);
    }
  }

  goToValue() {
    this.getParameter();
    if (this.productId) {
      this._router.navigate(['catalog/addnew-attribute/value'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addnew-attribute/value']);
    }
  }
  addProduct() {

  }
  //#endregion
  saveAttribute() {
    this._cS.addAttribute();
  }
  constructor(private _router: Router,
    private _cS: CommonService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  }

}

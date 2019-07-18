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
    if (this.productId) {
      this._router.navigate(['/catalog/addProduct'], { queryParams: { id: this.productId } });
    }
  }

  //#region tabs routing on click
  productId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id']
    });
  }

  goToInfo() {
    if (this.productId) {
      this._router.navigate(['catalog/addnew-attribute/info'], { queryParams: { id: this.productId } });
    } else {
      this._router.navigate(['catalog/addnew-attribute/info']);
    }
  }

  goToValue() {
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
    this.getParameter();
  }

}

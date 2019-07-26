import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-addnew-attribute',
  templateUrl: './addnew-attribute.component.html',
  styleUrls: ['./addnew-attribute.component.scss']
})
export class AddnewAttributeComponent implements OnInit {
  title: any = 'Add a new attribute';
  backToList() {
    if (this.productId) {
      this._router.navigate(['/catalog/addProduct'], { queryParams: { id: this.productId } });
    }
  }

  //#region tabs routing on click
  productId: any;
  attributeId: any;
  getParameter() {
    this._route.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.attributeId = params['attributeId'];
    });
  }

  goToInfo() {
    if (this.productId) {
      if (this.attributeId) {
        this._router.navigate(['catalog/addnew-attribute/info'], { queryParams: { id: this.productId, attributeId: this.attributeId } });
      } else {
        this._router.navigate(['catalog/addnew-attribute/info'], { queryParams: { id: this.productId } });
      }
    } else {
      this._router.navigate(['catalog/addnew-attribute/info']);
    }
  }

  goToValue() {
    if (this._cS.attrInfo || this.attributeId) {
      if (this.productId) {
        if (this.attributeId) {
          this._router.navigate(['catalog/addnew-attribute/value'], { queryParams: { id: this.productId, attributeId: this.attributeId } });
        } else {
          this._router.navigate(['catalog/addnew-attribute/value'], { queryParams: { id: this.productId } });
        }
      } else {
        this._router.navigate(['catalog/addnew-attribute/value']);
      }
    } else {
      this._cS.displayToast(4, 'Please fill attribute info for add attribute value');
    }
  }
  addProduct() {

  }
  //#endregion
  saveAttribute() {
    if (this._cS.attrInfo || this.attributeId) {
      this._cS.addAttribute();
    } else {
      this._cS.displayToast(4, 'Please fill attribute info for add attribute');
    }
  }
  constructor(private _router: Router,
    private _cS: CommonService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getParameter();
    if (this.attributeId) {
      this.title = "Edit product attribute";
    }else{
      this.title = "Add a new attribute";
    }
  }

}

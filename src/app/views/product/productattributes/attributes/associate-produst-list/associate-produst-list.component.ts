import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MockService } from '../../../../../services/mock.service';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-associate-produst-list',
  templateUrl: './associate-produst-list.component.html',
  styleUrls: ['./associate-produst-list.component.scss']
})
export class AssociateProdustListComponent implements OnInit {
  @Output() associateProduct = new EventEmitter();
  @Output() productList = new EventEmitter();
  tableHeader: any = ['Select', 'Product name', 'Published'];

  //#region search panel form 
  associateForm: FormGroup;

  associateForm_fb() {
    this.associateForm = this.fb.group({
      productName: [null],
      productType: [null],
      category: [null],
      manufacturer: [null],
      vendor: [null],
    })
  }
  //#endregion

  //#region static list
  lstProductType: any = [];
  lstVendor: any = [];
  getStaticList() {
    this.lstProductType = this._mS.getProductType();
    this.lstVendor = this._mS.getVendorList();
    this.associateForm.patchValue({
      productType: 0,
      category: 0,
      manufacturer: 0,
      vendor: 0
    })
  }
  //#endregion

  //#region getProductList
  lstProduct: any = [];
  getProductList() {
    this._cS.API_GET(this._cS.getProductList())
      .subscribe(res => {
        this.lstProduct = res.products;
        this.productList.emit(this.lstProduct);
      })
  }

  selectProduct(id) {
    this.associateProduct.emit(id);
  }
  //#endregion
  constructor(private fb: FormBuilder,
    private _mS: MockService,
    private _cS: CommonService) { }

  ngOnInit() {
    this.associateForm_fb();
    this.getStaticList();
    this.getProductList();
  }

}

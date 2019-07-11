import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MockService } from '../../../services/mock.service';
import { CommonService } from '../../../services/common.service';
import { find } from 'rxjs/operators';
declare var $: any;
const productId = localStorage.getItem('editProductId');

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})

export class ProductinfoComponent implements OnInit {
  @ViewChild('infoForm', { static: true }) infoForm: ElementRef;

  //#region product info form
  productInfoForm: FormGroup;

  productInfoForm_fb() {
    this.productInfoForm = this.fb.group({
      id: [null],
      productName: [null, Validators.required],
      shortDescription: [null],
      fullDescription: [null],
      sku: [null],
      inventoryMethod: [null],
      stockQuantity: [null],
      shippingEnable: [null],
      weight: [null],
      length: [null],
      width: [null],
      height: [null],
      categories: [null],
      price: [null, Validators.pattern("^[1-9]\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$")],
      productCost: [null],
      discount: [null],
      tax: [null],
      taxCategory: [null]
    });
  }
  //#endregion

  //#region static lists
  lstInvantory: any = [];
  lstDiscount: any = [];
  lstTaxCategory: any = [];
  bindStaticList() {
    this.lstInvantory = this._mS.getInvantoryMethods();
    this.lstDiscount = this._mS.getDiscountList();
    this.lstTaxCategory = this._mS.getTaxCategory();
    this.productInfoForm.patchValue({
      inventoryMethod: 1,
      taxCategory: 0
    })
  }

  changeInventory(value) {
    const stockQuan = <HTMLElement>document.querySelector('.stockQuan');
    if (stockQuan) {
      if (value == "2") {
        stockQuan.style.display = 'block';
      } else {
        stockQuan.style.display = 'none';
      }
    }
  }
  //#endregion

  //#region category multi select
  dropdownProductCategory = {
    singleSelection: false,
    text: "Select Order Status",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  };

  dropdownProductDiscount = {
    singleSelection: false,
    text: "Select Discount",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    badgeShowLimit: 1,
    maxHeight: 200
  }
  lstCategories: any = [];
  selectedCategories: any = [];
  //#endregion

  //#region fuctions
  isShipping(ev) {
    const drpClass = <HTMLElement>document.querySelector('.isShipping');
    if (drpClass) {
      if (ev) {
        drpClass.style.display = 'block';
      } else {
        drpClass.style.display = 'none';
      }
    }
  }

  isTaxExempt(ev) {
    const drpClass = <HTMLElement>document.querySelector('.isTax');
    if (drpClass) {
      if (!ev.target.checked) {
        drpClass.style.display = 'block';
      } else {
        drpClass.style.display = 'none';
      }
    }
  }

  restrict(e) {
    if ([69, 187, 188, 189, 190, 107, 109].includes(e.keyCode)) {
      e.preventDefault();
    }
  }

  getCategoryList() {
    this._cS.API_GET(this._cS.URL_getCategoryList())
      .subscribe(res => {
        if (res) {
          this.lstCategories = res.categories;
          this.lstCategories.map(x => {
            x.itemName = x.name
          });
        }
      })
  }

  multiSelectedOptions() {
    this.lstCategories.map(x => {
      this.selectedCategories.push(x.id, x.itemName);
    });
    this.lstDiscount.map(x => {
      this.selectedDiscount.push(x);
    });
    this.productInfoForm.get('categories').setValue(this.selectedCategories);
    this.productInfoForm.get('discount').setValue(this.selectedDiscount);
  }

  onProductCatSelect(value) {
    // const selectedData = this.selectedCategories.map((x: { itemName: any; }) => { return x.itemName });
    // var filtered = this.lstCategories.filter(
    //   function (e) { return this.indexOf(e.name) != -1; }, selectedData);
    // this.lstCategories = filtered;
  }

  selectedDiscount: any = [];
  onDiscountSelect(value) {
    // const selectedData = this.selectedDiscount.map((x: { itemName: any; }) => { return x.itemName });
    // var filtered = this.lstDiscount.filter(
    //   function (e) { return this.indexOf(e.itemName) != -1; }, selectedData);
    // this.lstDiscount = filtered;
  }

  editedProduct: any = [];
  editRecord() {
    if (productId != null) {
      this._cS.API_GET(this._cS.URL_getProductById(productId))
        .subscribe(res => {
          if (res) {
            var findId = res.products.find(x => x.id == productId);
            console.log('findId:', findId)
            if (findId) {
              localStorage.setItem('EditedRecord', JSON.stringify(findId));
              this.isShipping(findId.is_ship_enabled);
              this.productInfoForm.patchValue({
                id: productId,
                productName: findId.name ? findId.name : '',
                shortDescription: findId.short_description ? findId.short_description : '',
                fullDescription: findId.full_description ? findId.full_description : '',
                sku: findId.sku ? findId.sku : '',
                inventoryMethod: findId.manage_inventory_method_id ? findId.manage_inventory_method_id : 0,
                stockQuantity: findId.stock_quantity ? findId.stock_quantity : 0,
                shippingEnable: findId.is_ship_enabled ? findId.is_ship_enabled : true,
                weight: findId.weight ? findId.weight : 0,
                length: findId.length ? findId.length : 0,
                width: findId.width ? findId.width : 0,
                height: findId.height ? findId.height : 0,
                // categories: findId.categories ? findId.categories : '',
                price: findId.price ? findId.price : '',
                productCost: findId.product_cost ? findId.product_cost : 0,
                discount: findId.discount_ids ? findId.discount_ids : 0,
                tax: findId.is_tax_exempt ? findId.is_tax_exempt : true,
              })
            }

          }
        });
    }
  }
  //#endregion
  constructor(private fb: FormBuilder,
    private _mS: MockService,
    private _cS: CommonService) { }


  ngOnInit() {
    console.log('infoForm', this.infoForm.nativeElement)
    this.productInfoForm_fb();
    this.bindStaticList();
    this.getCategoryList();
    this.multiSelectedOptions();
    if (productId != null) {
      this.editRecord();
    }
    // $(document).ready(function () {
    //   $('#summernote').summernote();
    // });
  }

}

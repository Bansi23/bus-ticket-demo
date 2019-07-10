import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-add-product',
  templateUrl: './select-add-product.component.html',
  styleUrls: ['./select-add-product.component.scss']
})
export class SelectAddProductComponent implements OnInit {

  id: any;
  backToSearchList() {
    this._router.navigate(['/sales/addproduct'], { queryParams: { id: this.id } });
  }
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.id = params['id']
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordertabs',
  templateUrl: './ordertabs.component.html',
  styleUrls: ['./ordertabs.component.scss']
})
export class OrdertabsComponent implements OnInit {

  title: any = 'Edit order details';

  backToSearchList() {
    this._router.navigateByUrl('/sales/orders');
  }
  constructor(private _router: Router) { }


  ngOnInit() {
  }
}

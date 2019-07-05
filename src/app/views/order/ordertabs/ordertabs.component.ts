import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordertabs',
  templateUrl: './ordertabs.component.html',
  styleUrls: ['./ordertabs.component.scss']
})
export class OrdertabsComponent implements OnInit {

  title: any = 'Edit order details';
  constructor() { }

  ngOnInit() {
  }
}

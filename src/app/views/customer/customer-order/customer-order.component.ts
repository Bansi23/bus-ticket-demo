import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToOrders(){
     this.router.navigateByUrl('')
  }

}

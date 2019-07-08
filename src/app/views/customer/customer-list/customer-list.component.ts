import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateToEditCustomer(){
    
    this.router.navigateByUrl("/customers/addEdit")
  }

}

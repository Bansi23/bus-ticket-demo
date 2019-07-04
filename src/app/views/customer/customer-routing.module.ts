import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCustomerComponent } from './search-customer/search-customer.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customers'
    },
    children: [
      { path: '', redirectTo: 'customer' },
      { path: 'customer', component: SearchCustomerComponent, data: { title: 'Customer' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

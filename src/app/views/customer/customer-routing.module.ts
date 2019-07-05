import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AddEditComponent } from './add-edit/add-edit.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customers'
    },
    children: [
      { path: '', redirectTo: 'customer' },
      { path: 'customer', component: SearchCustomerComponent, data: { title: 'Customer' } },
      { path: 'addEdit', component : AddEditComponent, data : { title : 'Add customer'}}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AngularMultiSelectModule,
    FormsModule
  ]
})
export class CustomerModule { }


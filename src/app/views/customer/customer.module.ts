import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [SearchCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MyDatePickerModule,
    AngularMultiSelectModule

  ]
})
export class CustomerModule { }

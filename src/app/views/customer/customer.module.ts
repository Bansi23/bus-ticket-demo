import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [SearchCustomerComponent, AddEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AngularMultiSelectModule,
    FormsModule,
    MyDatePickerModule,
    

  ]
})
export class CustomerModule { }


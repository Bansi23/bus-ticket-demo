import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module'
import { CustomerRoutingModule } from './customer-routing.module';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { AddEditComponent } from './add-edit/add-edit.component';
import { from } from 'rxjs';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [SearchCustomerComponent, AddEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AngularMultiSelectModule,
    FormsModule,
    MyDatePickerModule,
    SharedModule
    

  ]
})
export class CustomerModule { }


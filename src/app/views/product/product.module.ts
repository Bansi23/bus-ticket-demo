import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [SearchProductComponent, ProductListComponent, ProductTabsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

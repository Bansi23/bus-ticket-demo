import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { SearchOrderComponent } from './search-order/search-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { OrdertabsComponent } from './ordertabs/ordertabs.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { BillingShippingComponent } from './billing-shipping/billing-shipping.component';
import { AddProductToOrderComponent } from './add-product-to-order/add-product-to-order.component';
import { OrderNoteComponent } from './order-note/order-note.component';


@NgModule({
  declarations: [SearchOrderComponent, OrdertabsComponent, OrderInfoComponent, BillingShippingComponent, AddProductToOrderComponent, OrderNoteComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OrderModule { }

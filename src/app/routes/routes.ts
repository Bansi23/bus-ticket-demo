import { LayoutComponent } from '../layout/layout.component';
// import { InvoiceListComponent } from './invoice-list/invoice-list.component';
// import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
// import { CustomerListComponent } from './customer-list/customer-list.component';
// import { ItemListComponent } from './item-list/item-list.component';
// import { CreateInvoiceWithArrayComponent } from './create-invoice-with-array/create-invoice-with-array.component';
// import { InvoiceListWithArray0Component } from './invoice-list-with-array0/invoice-list-with-array0.component';
import {SelectRootComponent}from './select-root/select-root.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'bus-ticket', pathMatch: 'full' },
            { path: 'bus-ticket',  component : SelectRootComponent },
      
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];

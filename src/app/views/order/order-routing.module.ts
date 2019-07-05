import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchOrderComponent } from './search-order/search-order.component';
import { OrdertabsComponent } from './ordertabs/ordertabs.component';


const routes: Routes = [
  // {
  //   path: '',
  //   data: { title: 'Sales' },
  //   children: [
  //     { path: '', redirectTo: 'orders', pathMatch: 'full' },
  //     {
  //       path: 'orders', component: SearchOrderComponent, data: { title: 'Orders' },
  //       children: [
  //         { path: 'viewrecord', component: OrdertabsComponent, data: { title: 'View Record' } }
  //       ]
  //     },
  //   ]
  // }

  {
    path: '',
    data: { title: 'Sales' },
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: SearchOrderComponent, data: { title: 'Orders' } },
      { path: 'viewrecord', component: OrdertabsComponent, data: { title: 'View Record' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

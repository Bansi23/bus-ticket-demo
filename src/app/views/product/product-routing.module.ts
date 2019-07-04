import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Catalog'
    },
    children: [
      { path: '', redirectTo: 'product' },
      { path: 'product', component: SearchProductComponent, data: { title: 'product' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

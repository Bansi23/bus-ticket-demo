import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Catalog'
    },
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: SearchProductComponent, data: { title: 'Product' } },
      { path: 'create', component: ProductTabsComponent, data: { title: 'Create' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

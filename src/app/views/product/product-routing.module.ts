import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { AddnewAttributeComponent } from './productattributes/attributes/addnew-attribute/addnew-attribute.component';


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
      { path: 'addnew', component: AddnewAttributeComponent, data: { title: 'Add New Attribute' }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

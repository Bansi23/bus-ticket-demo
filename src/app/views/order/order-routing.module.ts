import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectRootComponent } from './select-root/select-root.component';


const routes: Routes = [

  //{
    //path: '',
    //data: { title: 'Select-Bus' },
    //children: [
      { path: '', redirectTo: 'bus-ticket', pathMatch: 'full' },
      { path: 'bus-ticket', component: SelectRootComponent, data: { title: 'Bus Ticket' } },
    //]
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

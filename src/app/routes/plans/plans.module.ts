import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'plans' },
  { path: 'plans', component: PlansComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PlansComponent
  ],
  exports: [
    RouterModule,
    PlansComponent
  ]
})
export class PlansModule { }

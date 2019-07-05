import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule,
    AngularMultiSelectModule
  ],
  exports: [
    TabsModule,
    AngularMultiSelectModule
  ]
})
export class SharedModule { }

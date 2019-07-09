import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
//import { QuillModule } from 'ngx-quill'
import { from } from 'rxjs';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
   // QuillModule
  ],
  exports: [
    TabsModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    NgxPaginationModule,
    ModalModule,
  //  QuillModule
  ],
})
export class SharedModule { }

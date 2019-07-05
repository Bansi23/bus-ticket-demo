import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxPaginationModule} from 'ngx-pagination';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule,
    AngularMultiSelectModule,
    MyDatePickerModule,
    NgxPaginationModule
   ],
  exports: [
    TabsModule,
    AngularMultiSelectModule,
    MyDatePickerModule,
    NgxPaginationModule
    
  ]
})
export class SharedModule { }

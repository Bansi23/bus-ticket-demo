import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'registration' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'list', component: UserlistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    RegistrationComponent,
    UserlistComponent
  ],
  exports: [
    RouterModule, RegistrationComponent
  ]
})
export class UserModule { }

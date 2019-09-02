import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { SettingsService } from '../../core/settings/settings.service';
import { CommonService } from '../../services/common.service';
import { AuthenticationService } from '../../services/authentication.service';
// import * as role from '../../../assets/json/userRole.json'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    // superadmin@hasle.com
    valForm: FormGroup;
    errorMessage: any;
    lstUsers: any = [];

    constructor(fb: FormBuilder, private router: Router, private settings: SettingsService, private _cS: CommonService, private _auth: AuthenticationService) {
        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });
    }

    submitForm($ev, value: any) {
        // $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.errorMessage = null;

            const formValues = this.valForm.value;

            // this._cS.getlstUsers()
            //     .subscribe(res => {
            //         const lstusers = res;
            //         const userDetails = lstusers.find(x => x.email == formValues.email && x.password == formValues.password);
            //         if (userDetails) {
            //             localStorage.setItem('userDetails', JSON.stringify(userDetails));
            //             this.router.navigate(['/dashboard']);
            //         } else {
            //             this.errorMessage = 'Please check your email or password';
            //         };
        //     const user =  role.default;
        //             for (let i = 0; i < user.length; i++) {
        //                 if(user[i].email == formValues.email && user[i].password == formValues.password){
        //                     localStorage.setItem('userDetails', JSON.stringify(user[i]));
        //                     this.router.navigate(['/dashboard']);
        //                 } 
        //                 // else {
        //                 //                 this.errorMessage = 'Please check your email or password';
        //                 //             };
                      
        //              }
     }
    }

    ngOnInit() {
        this._auth.createMenu();
        this._cS.currentUserRole = 3;
        const userDetails = localStorage.getItem('userDetails');
        if (userDetails) {
            this.router.navigate(['/dashboard']);
        }
    }
}

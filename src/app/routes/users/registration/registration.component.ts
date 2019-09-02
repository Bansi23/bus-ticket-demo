import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  registerForm_fb() {
    let password = new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
    let certainPassword = new FormControl(null, Validators.compose([Validators.required, CustomValidators.equalTo(password)]));
    this.registerForm = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: password,
      cpassword: certainPassword,
      companyname: [null, Validators.required],
      status: [null],
    });
  };

  submitForm($ev, formValue) {
    $ev.preventDefault();
  };

  constructor(private fb: FormBuilder, private router: Router, public _cS: CommonService) { }

  ngOnInit() {
    this.registerForm_fb();
    this.registerForm.patchValue({
      status: "active",
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  //#region variables
  pipedrivetoken: string = "XXXX-XXXX-XXXX-5256";
  isViewable: boolean = true;
  isViewablePd : boolean = false;
  //#endregion

  //#region functions

  // mindbodyPanel: FormGroup;

  // mindbodyPanel_Fb() {
  //   this.mindbodyPanel = this.fb.group({
  //     siteid: [null, Validators.required],
  //     key: [null, Validators.required],
  //   });
  // };

  //#endregion

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-addnew-attribute',
  templateUrl: './addnew-attribute.component.html',
  styleUrls: ['./addnew-attribute.component.scss']
})
export class AddnewAttributeComponent implements OnInit {

  backToList() {
    this._router.navigateByUrl('/catalog/addProduct')
  }

  saveAttribute() {
    this._cS.addAttribute();
  }
  constructor(private _router: Router,
    private _cS: CommonService) { }

  ngOnInit() {
  }

}

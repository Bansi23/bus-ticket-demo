import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew-attribute',
  templateUrl: './addnew-attribute.component.html',
  styleUrls: ['./addnew-attribute.component.scss']
})
export class AddnewAttributeComponent implements OnInit {

  backToList() {
    this._router.navigateByUrl('/catalog/addProduct')
  }

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}

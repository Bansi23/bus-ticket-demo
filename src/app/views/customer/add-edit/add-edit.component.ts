import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    
  }
 
}

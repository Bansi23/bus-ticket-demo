import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  tableHeader: any = ['Picture', 'Display order', 'Alt', 'Title', 'Action']

  prodPictureForm: FormGroup;

  prodPictureForm_fb() {
    this.prodPictureForm = this.fb.group({
      picture : [null],
      alt : [null],
      title : [null],
      displayOrder : [null],
    })
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prodPictureForm_fb();
  }

}

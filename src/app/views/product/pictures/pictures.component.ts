import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  tableHeader : any = ['Picture', 'Display order', 'Alt', 'Title','Action']
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

const productId = localStorage.getItem('editProductId');
const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  tableHeader: any = ['Picture', 'Display order', 'Alt', 'Title', 'Action']

  prodPictureForm: FormGroup;
  lstPicture: any = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  totalRecords: number;

  pageChanged(value) {
    this.pageIndex = +value;
    this.getPictureList();
  };

  changePageSize(value) {
    this.pageIndex = 1;
    this.pageSize = value;
    this.getPictureList();
  }

  prodPictureForm_fb() {
    this.prodPictureForm = this.fb.group({
      picture: [null],
      alt: [null],
      title: [null],
      displayOrder: [null],
    })
  }

  //#region get product picture list
  getPictureList() {
    if (productId != null) {
      this.lstPicture = editedRecord[0].images;
      console.log('this.lstPicture:', this.lstPicture.length)
      this.totalRecords = this.lstPicture.length;
    }
  }
  //#endregion

  //#region edit picture details
  editPicture(picId) {

  }
  //#endregion

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prodPictureForm_fb();
    this.getPictureList();
  }

}

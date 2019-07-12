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
      src: [null],
      alt: [null],
      title: [null],
      position: [null],
    })
  }
  //#region get product picture list
  getPictureList() {
    if (productId != null) {
      this.lstPicture = editedRecord.images;
      console.log('this.lstPicture:', this.lstPicture.length)
      this.totalRecords = this.lstPicture.length;
    }
  }

  //#endregion

  //#region edit & delete picture details
  editPicture(i) {
    console.log('i:', i)
    this.prodPictureForm.patchValue({
      src: this.lstPicture[i].src,
      alt: this.lstPicture[i].alt,
      title: this.lstPicture[i].title,
      position: this.lstPicture[i].position,
    })
  }

  deletePicture(picId) {
    if (confirm("Are you sure want to delete this image?")) {
      this.lstPicture.splice(picId, 1);
    }
  }
  //#endregion

  //#region add new picture in lst
  formValue: any = {};

  readUrl(event: any) {
    this.formValue = this.prodPictureForm.getRawValue()
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.formValue.src = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addPicture() {
    this.formValue = this.prodPictureForm.getRawValue();
    console.log('this.formValue:', this.formValue)
    this.lstPicture.push(this.formValue);
    this.prodPictureForm.reset();
  }
  //#endregion
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prodPictureForm_fb();
    this.getPictureList();
  }
}

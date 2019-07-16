import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../../../services/common.service';

const productId = localStorage.getItem('editProductId');
const editedRecord = JSON.parse(localStorage.getItem('EditedRecord'));

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  tableHeader: any = ['Picture', 'Display order', 'Action']

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
      position: [null],
    })
  }
  //#region get product picture list
  getPictureList() {
    if (productId != null) {
      this.lstPicture = editedRecord.images;
      this.totalRecords = this.lstPicture.length;
    }
  }

  //#endregion

  //#region edit & delete picture details
  editPicture(i) {
    console.log('this.lstPicture:', this.lstPicture)
    this.prodPictureForm.patchValue({
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
  src: any
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.src = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  b64toBlob(b64Data, contentType?, sliceSize?) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    console.log('blob:', blob)
    return blob;
  }

  addPicture() {
    this.formValue = this.prodPictureForm.getRawValue()
    this.formValue.src = this.src;
    this.b64toBlob(this.src);
    this.lstPicture.push(this.formValue);
    // this._cS.sendPictureToService(this.lstPicture);
    this.prodPictureForm.reset();
  }
  //#endregion
  constructor(private fb: FormBuilder,
    private _cS: CommonService) { }

  ngOnInit() {
    this.prodPictureForm_fb();
    this.getPictureList();
  }
}

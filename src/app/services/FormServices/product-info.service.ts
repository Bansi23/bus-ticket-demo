import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  onFormSubmitted = new EventEmitter<any>();

  constructor() { }
}

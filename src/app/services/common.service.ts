import { Injectable } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

//const internetMessage = 'Please check your internet connection !!';
const baseUrl = environment.apiURL;
const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE0NTQxNDUsImV4cCI6MTg3NjgxNDE0NSwiaXNzIjoiaHR0cDovL25vcC5zYXR2YS5zb2x1dGlvbnMiLCJhdWQiOlsiaHR0cDovL25vcC5zYXR2YS5zb2x1dGlvbnMvcmVzb3VyY2VzIiwibm9wX2FwaSJdLCJjbGllbnRfaWQiOiJhNTBkY2I0MS1lODgzLTQ5YWItOGM3NS02ZTU5MzI1MTIzNTciLCJzdWIiOiJhNTBkY2I0MS1lODgzLTQ5YWItOGM3NS02ZTU5MzI1MTIzNTcgIiwiYXV0aF90aW1lIjoxNTYxNDUzOTI0LCJpZHAiOiJsb2NhbCIsInNjb3BlIjpbIm5vcF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.m0z531w-lClGHBgLo82xMeUHRny17jM0QMr3eDs4nZWB48EVTFhPFzve786FsxdsxiPqE5rytsMQWXA7ByXe9N4cZFNnl7wpE1dCjOvS02c8H0AfNVdMkiJOGILRmbpHRKuWj8O0IjhWlwdll8-7nhRCJ7x6GBqx1Aj6RdceUKuma0qRFuqIcCBOuoKovPRHQ5AQ6yPZd-DIZE0Wu5KmChnwCfwIjs3CmJsepClOCF16T5UcsEKZq8409GXw2I070MKVbRBNQBvNCjf6OOtLFhCXUCExZXx4BJSohHcX4bP-qyBhQI-ZPcCxIIhKikHsZJkVyklzAQ19cUtrnnrxzQ';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // #region API METHODS
  /** Get API Method.
   * @param url - Just pass url after /api/. Predefine url will take from environment   
  */


  API_GET(url: string): Observable<any> {
    let hd: HttpHeaders = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json',
    });
    return this._httpClient.get(`${url}`, { headers: hd }).pipe(map(res => {
      setTimeout(() => {
      }, 500);
      return res;
    }, catchError(err => {
      if (err.status == 401) {
      }
      else if (err.status == 400) {
      }
      return throwError(err);
    })));
  };
  // #endregion

  // #region All URLs
  //#region order module api Urls
  getOrderList(limit, page) {
    return baseUrl + `orders?limit=${limit}&page=${page}`;
  }
  getOrderId(id: number) {
    return baseUrl + `orders/${id}`;
  }
  // #endregion
  getProductList() {
    return baseUrl + `products`;
  }

  getCustomerList() {
    return baseUrl + `customers`;
  }

  // #endregion

  //#region product module api Urls
  URL_getProductList() {
    return baseUrl + `products`;
  }

  URL_getCategoryList() {
    return baseUrl + `categories`;
  }

  URL_getManufacturerList() {
    return baseUrl + `manufacturers`;
  }

  URL_getAttributeList() {
    return baseUrl + `productattributes`;
  }
  //#endregion
  constructor(public _router: Router, public _httpClient: HttpClient) { }
}

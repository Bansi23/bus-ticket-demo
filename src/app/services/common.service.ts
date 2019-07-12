import { Injectable } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

//const internetMessage = 'Please check your internet connection !!';
const baseUrl = environment.apiURL;
const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE0NTQxNDUsImV4cCI6MTg3NjgxNDE0NSwiaXNzIjoiaHR0cDovL25vcC5zYXR2YS5zb2x1dGlvbnMiLCJhdWQiOlsiaHR0cDovL25vcC5zYXR2YS5zb2x1dGlvbnMvcmVzb3VyY2VzIiwibm9wX2FwaSJdLCJjbGllbnRfaWQiOiJhNTBkY2I0MS1lODgzLTQ5YWItOGM3NS02ZTU5MzI1MTIzNTciLCJzdWIiOiJhNTBkY2I0MS1lODgzLTQ5YWItOGM3NS02ZTU5MzI1MTIzNTcgIiwiYXV0aF90aW1lIjoxNTYxNDUzOTI0LCJpZHAiOiJsb2NhbCIsInNjb3BlIjpbIm5vcF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.m0z531w-lClGHBgLo82xMeUHRny17jM0QMr3eDs4nZWB48EVTFhPFzve786FsxdsxiPqE5rytsMQWXA7ByXe9N4cZFNnl7wpE1dCjOvS02c8H0AfNVdMkiJOGILRmbpHRKuWj8O0IjhWlwdll8-7nhRCJ7x6GBqx1Aj6RdceUKuma0qRFuqIcCBOuoKovPRHQ5AQ6yPZd-DIZE0Wu5KmChnwCfwIjs3CmJsepClOCF16T5UcsEKZq8409GXw2I070MKVbRBNQBvNCjf6OOtLFhCXUCExZXx4BJSohHcX4bP-qyBhQI-ZPcCxIIhKikHsZJkVyklzAQ19cUtrnnrxzQ';
const hd: HttpHeaders = new HttpHeaders({
  'Authorization': token,
  'Content-Type': 'application/json',
  'Accept': ' application/json, text/javascript'
});
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // #region API METHODS
  /** Get API Method.
   * @param url - Just pass url after /api/. Predefine url will take from environment   
  */
  API_GET(url: string): Observable<any> {
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

  /** Post API Method.
  * @param Url - Just pass url after /api/. Predefine url will take from environment
  * @param Body - Pass body parameter in json. Ex : { id : 1, name : ABC, occupation : Angular Developer}
 */
  API_POST(Url, Body): Observable<any> {
    return this._httpClient.post<any>(`${Url}`, Body, { headers: hd }).pipe(map(res => {
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

  /** Delete API Method.
   * @param Url - Just pass url after /api/. Predefine url will take from environment
  */
  API_DELETE(Url): Observable<any> {
    return this._httpClient.delete<any>(`${Url}`, { headers: hd }).pipe(map(res => {
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
  // #endregion

  // #region All URLs
  //#region order module api Urls
  getOrderList(limit, page) {
    return baseUrl + `orders?limit=${limit}&page=${page}`;
  }
  getOrderId(id: number) {
    return baseUrl + `orders/${id}`;
  }

  getOrderItem(orderId) {
    return baseUrl + `orders/${orderId}/items`;
  }
  getOrderItemId(orderId,itemId) {
    return baseUrl + `orders/${orderId}/items/${itemId}`;
  }

  getCountItem() {
    return baseUrl + `orders/count`;
  }
  // #endregion
  getProductList() {
    return baseUrl + `products`;
  }

  // getCustomerList() {
  //   return baseUrl + `customers`;
  // }

  getParticularCustomer(custId) {
    return baseUrl + `customers/${custId}`
  }

  getPaticularCustomerOrder(custId){
    return baseUrl + `orders/${custId}`
  }
  getCustomersList(PageSize,PageIndex){
    return baseUrl + `customers?Limit=${PageSize}&Page=${PageIndex}`;

  }

   formatAMPM() {
    var hours = new Date().getHours();
    var minutes : any;    
     minutes = new Date().getMinutes();
     var seconds = new Date().getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds+ ' '+ ampm;
    return strTime;
  }

  // #endregion

  //#region product module api Urls
  URL_getProductList(PageSize, PageIndex) {
    return baseUrl + `products?Limit=${PageSize}&Page=${PageIndex}`;
  }

  URL_getProductById(id) {
    return baseUrl + `products/${id}`;
  }
  // URL_searchProductList(categoryId?,  ) {
  //   return baseUrl + `products?Limit=${PageSize}&Page=${PageIndex}`;
  // }
  URL_getTotalRecords() {
    return baseUrl + `products/count`;
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

  URL_deleteRecord(id) {
    return baseUrl + `products/${id}`;
  }
  //#endregion
  constructor(public _router: Router, public _httpClient: HttpClient) { }
}

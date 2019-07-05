import { Injectable } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

//const internetMessage = 'Please check your internet connection !!';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // #region API METHODS
  /** Get API Method.
   * @param Url - Just pass url after /api/. Predefine url will take from environment   
  */
  API_GET(Url, Options?): Observable<any> {
    if (navigator.onLine) {
      return this._httpClient.get<any>(`${environment.apiURL}${Url}`, Options)
        .pipe(map(res => {
          return res;
        }), catchError(err => {
          return throwError(err);
        }));
    }
  };

  /** To do multiple GET call at same time and get result once all done the API response.
   * @param URL_Array Contain array of urls, Like ['www.gmail.com', 'www.gmail.com'].
   * @param Options Give HTTP options Like http headers.
   */


  // API_GET_Join(URL_Array, Options?): Observable<any> {
  //   if (navigator.onLine) {
  //     let observableBatch = [];
  //     URL_Array.forEach((url) => {
  //       observableBatch.push(this._httpClient.get<any>(`${environment.apiURL}${url}`, Options)
  //         .pipe(map(res => {
  //           return res;
  //         }), catchError(err => {
  //           return throwError(err);
  //         })));
  //     });
  //     return forkJoin(observableBatch);
  //   }
  // };

  /** Post API Method.
   * @param Url - Just pass url after /api/. Predefine url will take from environment
   * @param Body - Pass body parameter in json. Ex : { id : 1, name : Shashikant, occupation : Angular Developer}
  */



  // API_POST(Url, Body, Options?): Observable<any> {
  //   if (navigator.onLine) {
  //     //this.displayLoader(true);
  //     return this._httpClient.post<any>(`${environment.apiURL}${Url}`, Body, Options)
  //       .pipe(map(res => {
  //         //this.displayLoader(false);
  //         return res;
  //       }), catchError(err => {
  //         // this.displayLoader(false);
  //         return throwError(err);
  //       }));
  //   } else {
  //     // this.displayToast(2, internetMessage);
  //     // return empty();
  //   };
  // };


  /** Delete API Method.
   * @param Url - Just pass url after /api/. Predefine url will take from environment
  */

  // API_DELETE(Url): Observable<any> {
  //   if (navigator.onLine) {
  //     //this.displayLoader(true);
  //     return this._httpClient.delete<any>(`${environment.apiURL}${Url}`)
  //       .pipe(map(res => {
  //         // this.displayLoader(false);
  //         return res;
  //       }), catchError(err => {
  //         //this.displayLoader(false); 
  //         return throwError(err);
  //       }));
  //   } else {
  //     // this.displayToast(2, internetMessage);
  //     // return empty();
  //   };
  // };

  // #endregion
  constructor(public _router: Router, public _httpClient: HttpClient) { }
}

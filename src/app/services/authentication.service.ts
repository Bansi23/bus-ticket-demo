import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map } from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userDetails: any;
  // userType: BehaviorSubject<string> = new BehaviorSubject<string>(this.getUserType())
  createMenu(){
  // const  aMenu = adminMenu.default;
  // const uMenu = userMenu.default;
  // const user =  role.default;
}

  getlstUsers(): Observable<any> {
    return this.http.get<any>('api/lstUsers');
  }

  constructor(private http: HttpClient, private _cS : CommonService) { }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'angular2-toaster';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  getlstSync(): Observable<any> {
    return this.http.get<any>('api/lstSync');
  }

  getlstUsers(): Observable<any> {
    return this.http.get<any>('api/lstUsers');
  }

  currentUserRole: number = 3;
  UserPermissionMessage: any = `You don't have permission to view this page !!`;

  getLogtype() {
    return [
      { id: 1, logtype: "New Appointment" },
      { id: 2, logtype: "Booking" },
      { id: 3, logtype: "New Membership" },
      { id: 4, logtype: "Contract" },
      { id: 5, logtype: "Sales" },
    ]
  }

  displayToaster(type: number, title, body?) {
    const messageType = type == 1 ? 'success' : type == 2 ? 'error' : type == 3 ? 'warning' : type == 4 ? 'info' : 'error';
    this.toasterService.pop(messageType, title, body);
  }

  constructor(private http: HttpClient, private toasterService: ToasterService) { }
}

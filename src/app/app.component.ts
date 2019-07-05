import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet> '
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
  ) { }

  // #region Toaster
  // config: ToasterConfig = new ToasterConfig({
  //   showCloseButton: true,
  //   tapToDismiss: false,
  //   timeout: 5000,
  //   animation: 'flyRight',
  //   limit: 5,
  //   preventDuplicates: true,
  //   newestOnTop: true,
  //   positionClass: 'toast-top-right'
  // });
  // popToast(Type?, Title?, Message?) {
  //   this.toasterService.pop(Type, Title, Message);
  // };
  // #endregion   

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}

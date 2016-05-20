import { Component } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent  {

  constructor(
    private _router: Router) {
  }

//  gotoDetail() {
//    let link = ['HeroDetail'];
//    this._router.navigate(link);
//  }
}

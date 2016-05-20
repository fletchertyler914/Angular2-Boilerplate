import { Component } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'my-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent  {

  constructor(
    private _router: Router) {
  }

}

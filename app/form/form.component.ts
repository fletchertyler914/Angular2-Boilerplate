import { Component } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/form/form.component.html',
  styleUrls: ['app/form/form.component.css']
})
export class FormComponent  {

  vm: Object = {};

      onSubmit() {
          console.log(this.vm);
      }

  constructor(
    private _router: Router) {
  }

}

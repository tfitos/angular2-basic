import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'er-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    console.log('aaa');
    api.getStations().then(
      heroes => console.log(heroes),
      error =>  console.log(error)
    );
    console.log('bbb');
  }
}

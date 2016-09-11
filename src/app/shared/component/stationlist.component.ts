// Promise Version
import { Component, OnInit } from '@angular/core';
import { Station }           from '../model/station';
import { ApiService }       from '../api.service';

@Component({
  selector: 'er-station-list',
  templateUrl: './stationlist.component.html',
  providers: [ ApiService ]
})
export class StationListComponent implements OnInit {
  errorMessage: string;
  stations: Station[];

  constructor (private apiService: ApiService) {}

  ngOnInit() { this.getStations(); }

  getStations() {
    this.apiService.getStations()
      .then(
        stations => this.stations = stations,
        error =>  this.errorMessage = <any>error);
  }

}


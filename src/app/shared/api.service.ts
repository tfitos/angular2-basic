import { Injectable } from '@angular/core';
import { Station } from './model/station';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {

  title = 'Angular 2';

  constructor (private http: Http) {}

  getStations(): Promise<Station[]> {
    return this.http.get('https://transport.rest/stations?completion=true&query=alexander')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}

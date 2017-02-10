import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/map';

import { Deal } from './deal';

@Injectable()
export class DealService {
  private publicDealsUrl = 'http://localhost:5001/api/deals/public';
  private privateDealsUrl = 'http://localhost:5001/api/deals/private';

  constructor(private _http: Http, private _authHttp: AuthHttp) { }
  getPublicDeals() {
    console.log('inside deal service mathod.');
    return this._http
      .get(this.publicDealsUrl)
      .map(response=>response.json() as Deal[]);
      //.catch(this.handleError);
  }

  getPrivateDeals() {
    return this._authHttp
      .get(this.privateDealsUrl)
      .map(response=>response.json() as Deal[]);
  }

  // getPrivateDeals() {
  //   return this._http.get(this.privateDealsUrl)
  //   .map(response => response.json() as Deal[]);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}

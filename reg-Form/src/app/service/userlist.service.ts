import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserlistService {
  // Throw it as a API endpoint????????
  private __getProductsUrl = 'http://localhost:3000/userslist';

  // Throw it as a API endpoint????????
  // Create a service for the front end to use the aggregated list
  constructor(private __http: Http) {}

  getProductInitial() {
    return this.__http.get(this.__getProductsUrl).map(response => response.json());
  }
}

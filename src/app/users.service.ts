import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: Http) {}

  getUsers() {
    return this._http.get(this._url).map(res => res.json());
  }
}

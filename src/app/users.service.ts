import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UsersService {

  _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: Http) {}

  getUsers() {
    return this._http.get(this._url).map(res => res.json());
  }

  createUser(user: User) {
    let userData = JSON.stringify(user);
    return this._http.post(this._url, userData).map(response => response.json());
  }
}

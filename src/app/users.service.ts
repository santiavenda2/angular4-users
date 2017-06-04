import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  getUsers() {
    return [
      {
        id: 1,
        name: 'test',
        email: 'test@email.com',
      }
    ];
  }
}

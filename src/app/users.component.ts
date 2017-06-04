import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent  {

  usersList: any[] = [];

  constructor(usersService: UsersService) {
    this.usersList = usersService.getUsers();
  }
}

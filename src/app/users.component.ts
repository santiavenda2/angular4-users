import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  isLoading = true;
  usersList: any[] = [];

  constructor(private _usersService: UsersService) {}

  ngOnInit() {
    this._usersService.getUsers().subscribe(users => {
      this.usersList = users;
      this.isLoading = false;
    });
  }

}

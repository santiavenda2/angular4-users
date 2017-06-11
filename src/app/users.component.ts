import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user';

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

  deleteUser(user: User) {
    if (confirm('Are you sure you want to delete ' + user.name + '?')) {
      let index = this.usersList.indexOf(user);


      this._usersService.deleteUser(user.id)
        .subscribe(
          response => {
            this.usersList.splice(index, 1);
          });
    }
  }
}

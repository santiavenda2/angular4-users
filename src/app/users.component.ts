import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent  {

  usersList: any[] = [
    {
      id: 1,
      name: 'test',
      email: 'test@email.com',
    }
  ];
}

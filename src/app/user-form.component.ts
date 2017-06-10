import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicValidators } from './basicValidators';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  form: FormGroup;
  user = new User();

  constructor(fb: FormBuilder,
              private _usersService: UsersService,
              private _router: Router) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', BasicValidators.email],
      phone: [],
      address: fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

  create() {
    let result = this._usersService.createUser(this.user);

    result.subscribe(x => {
      this.form.markAsPristine();
      this._router.navigate(['users']);
    });
  }

}


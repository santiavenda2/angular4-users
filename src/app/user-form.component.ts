import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicValidators } from './basicValidators';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  user = new User();
  title: string;

  constructor(fb: FormBuilder,
              private _usersService: UsersService,
              private _router: Router,
              private _route: ActivatedRoute) {
    this.createUserForm(fb);
  }

  private createUserForm(fb: FormBuilder) {
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

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];

      this.title = id ? 'Edit User' : 'New User';

      if (!id) {
        return;
      }


      this._usersService.getUser(id)
        .subscribe(
          user => this.user = user,
          response => {
            if (response.status === 404) {
              this._router.navigate(['not-found']);
            }
          });
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


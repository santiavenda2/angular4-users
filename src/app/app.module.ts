import 'rxjs/add/operator/map';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,  JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './navbar.component';
import { HomeComponent} from './home.component';
import { UsersComponent} from './users.component';
import { UserFormComponent} from './user-form.component';
import { NotFoundComponent} from './not-found.component';
import { PostsComponent} from './posts.component';
import { routing } from './app.routing';

import { UsersService} from './users.service';
import { PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';

@NgModule({
  imports:      [ BrowserModule , routing, HttpModule, JsonpModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, UsersComponent, PostsComponent, UserFormComponent,
                  NotFoundComponent],
  providers:    [UsersService, PreventUnsavedChangesGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

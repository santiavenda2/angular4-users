import 'rxjs/add/operator/map';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,  JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './navbar.component';
import { HomeComponent} from './home.component';
import { UsersComponent} from './users.component';
import { PostsComponent} from './posts.component';
import { routing } from './app.routing';

import { UsersService} from './users.service';

@NgModule({
  imports:      [ BrowserModule , routing, HttpModule, JsonpModule],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, UsersComponent, PostsComponent ],
  providers: [UsersService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './navbar.component';
import { HomeComponent} from './home.component';
import { UsersComponent} from './users.component';
import { PostsComponent} from './posts.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, UsersComponent, PostsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

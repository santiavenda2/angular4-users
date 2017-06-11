import 'rxjs/add/operator/map';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,  JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './navbar.component';
import { HomeComponent} from './home.component';
import { UsersModule } from './users/user.module';
import { NotFoundComponent} from './not-found.component';
import { PostsComponent} from './posts.component';
import { usersRouting } from './users/users.routing';
import { routing } from './app.routing';

import { PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    UsersModule,
    usersRouting,
    routing,
  ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, PostsComponent,
                  NotFoundComponent],
  providers:    [PreventUnsavedChangesGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

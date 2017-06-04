import {RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { PostsComponent } from './posts.component';


export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', component: HomeComponent},
]);

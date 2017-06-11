import {RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { NotFoundComponent } from './not-found.component';


export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'not-found', component: NotFoundComponent },
  {path: '**', component: NotFoundComponent},
]);

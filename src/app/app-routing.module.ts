import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { PostComponent } from './post/post.component';
import { RatingComponent } from './rating/rating.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'followers', component: FollowersComponent, outlet: 'sub'},
      { path: 'posts', component: PostComponent, outlet: 'sub'},
  ]
 },
  {path: 'rating', component: RatingComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'title', component: TitlecaseComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FollowersComponent } from './followers/followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { PostComponent } from './post/post.component';
import { RatingComponent } from './rating/rating.component';
import { AuthGuard } from './service/auth-guard.service';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'followers', component: FollowersComponent, outlet: 'sub'},
      { path: 'posts', component: PostComponent, outlet: 'sub'},
      { path: 'followers/:id', component: GithubProfileComponent, outlet: 'sub'}
  ]
  , canActivate: [AuthGuard]
 },
  {path: 'rating', component: RatingComponent, canActivate: [AuthGuard]},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
  {path: 'title', component: TitlecaseComponent, canActivate: [AuthGuard]},
  {path: 'todo', component: ToDoComponent, canActivate: [AuthGuard]},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  {path: 'auto-complete', component: AutoCompleteComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

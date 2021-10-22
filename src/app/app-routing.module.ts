import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { RatingComponent } from './rating/rating.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'title', component: TitlecaseComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

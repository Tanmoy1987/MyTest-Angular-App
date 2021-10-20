import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'panel', component: PanelComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

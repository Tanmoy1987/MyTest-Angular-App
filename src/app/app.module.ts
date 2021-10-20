import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { FiveStarComponent } from './five-star/five-star.component';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteIconComponent,
    FiveStarComponent,
    RatingComponent,
    HomeComponent,
    BootstrapPanelComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

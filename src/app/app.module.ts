import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { FiveStarComponent } from './five-star/five-star.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteIconComponent,
    FiveStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

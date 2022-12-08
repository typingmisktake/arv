import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndUsaComponent } from './ind-usa/ind-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';
import { MealComponent } from './meal/meal.component';

@NgModule({
  declarations: [AppComponent, IndUsaComponent, AtlanticComponent, PacificComponent, MealComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

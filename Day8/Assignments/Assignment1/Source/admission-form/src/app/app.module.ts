import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [AppComponent, DisplayComponent, ErrorMessageComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

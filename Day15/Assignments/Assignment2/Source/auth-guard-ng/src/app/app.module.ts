import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './product/add/add.component';
import { ProductItemComponent } from './product/product-item/product-item.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, AddComponent, ProductItemComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

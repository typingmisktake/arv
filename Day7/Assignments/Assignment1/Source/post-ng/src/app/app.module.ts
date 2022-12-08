import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListComponent,
    PostFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

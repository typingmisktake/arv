import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [],
})
export class PostFormComponent {
  title: string = '';
  desc: string = '';
  imageUrl: string = '';

  @Output() createPost = new EventEmitter<object>();

  submit(e: MouseEvent) {
    e.preventDefault();
    this.createPost.emit({
      title: this.title,
      desc: this.desc,
      imageUrl: this.imageUrl,
      date: new Date().toLocaleDateString('en-in', { dateStyle: 'full' }),
    });
  }
}

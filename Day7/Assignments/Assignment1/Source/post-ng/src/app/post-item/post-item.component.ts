import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styles: [],
})
export class PostItemComponent {
  @Input() post = {
    id: 0,
    title: '',
    desc: '',
    date: '',
    imageUrl: '',
    isLiked: false,
  };

  @Output() onLike = new EventEmitter<number>();

  handleClick(e: MouseEvent) {
    e.preventDefault();
    this.onLike.emit(this.post.id);
  }

  get likeButtonClass() {
    if (this.post.isLiked) return 'fa-solid text-rose-500';
    else return 'fa-regular';
  }
}

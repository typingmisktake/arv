import { Component } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  date: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: [],
})
export class PostListComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At adipisci earum atque cumque quo culpa velit suscipit distinctio. Amet omnis blanditiis dolor! Officia fuga modi amet similique consequuntur quibusdam at.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/11/20/13/18/squirrel-7604249_960_720.jpg',
      date: 'Wednesday, 23 November, 2022',
      isLiked: false,
    },
  ];
  showLiked = false;

  handleCreatePost(post: any) {
    const newPost: Post = {
      id: this.posts.length + 1,
      title: post.title,
      desc: post.desc,
      imageUrl: post.imageUrl,
      date: post.date,
      isLiked: false,
    };
    this.posts.push(newPost);
  }

  handleLike(id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (this.posts[index].isLiked) this.posts[index].isLiked = false;
    else this.posts[index].isLiked = true;
  }

  toggleLikedPosts() {
    if (this.showLiked) this.showLiked = false;
    else this.showLiked = true;
  }

  get likedPosts() {
    return this.posts.filter((post) => post.isLiked);
  }

  get toggleButtonText() {
    if (this.showLiked) return 'Hide Liked Posts';
    return 'Show Liked Posts';
  }

  get toggleButtonIconClass() {
    if (this.showLiked) return 'fa-minus';
    return 'fa-plus';
  }

  get count() {
    return this.posts.filter((post) => post.isLiked).length;
  }
}

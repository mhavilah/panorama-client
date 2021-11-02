import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  @Input() user?: User;

  selectedPost?: Post;
  isAllLoaded:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onLoadAll(user: User): void {
    this.isAllLoaded = true;
    // Todo - load more data...
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}

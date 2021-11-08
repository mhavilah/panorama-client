import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from '../user';
import { Post } from '../post';
import { PostService } from '../post.service'
import { of, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  @Input() user?: User;

  posts$: Observable<Post[]> = of([]);

  selectedPost?: Post;
  isAllLoaded:boolean = false;
  isShowPostComments = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
      this.getPosts(environment.postInitialPageSize);
  }

  ngOnChanges(changes: SimpleChanges) {

    this.getPosts(environment.postInitialPageSize);
    // (changes.categoryId.currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

    // Reset other state
    this.isShowPostComments = false;

  }

  ngOnDestroy() {
    console.log("PostsComponent destroyed");
  }

  getPosts(pageSize?: number): void {
    if (this.user) {
      console.log(`Getting ${pageSize??"all"} posts for user: ${this.user.name}`);
      this.posts$ = this.postService.getPosts(this.user, pageSize);
    }
    else {
      console.log("PostsComponent: No user selected yet");
    }
  }

  onLoadAll(user: User): void {
    if (this.user) {
      console.log(`PostsComponent: Load all posts clicked for user: ${this.user.name}`);
      this.getPosts();
    }
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  showComments(post: Post): void {
    
    this.isShowPostComments = !this.isShowPostComments;
    console.log(`PostsComponent: Show comments is: ${this.isShowPostComments}`);

  }
}

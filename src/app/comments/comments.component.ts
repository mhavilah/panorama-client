import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Comment } from '../comment';
import { Post } from '../post';
import { CommentService } from '../comment.service'
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
  @Input() post?: Post;

  comments$: Observable<Comment[]> = of([]);

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  ngOnChanges(changes: SimpleChanges) {

    this.getComments();

  }

  ngOnDestroy() {
    console.log("CommentsComponent destroyed");
  }

  getComments(): void {
    if (this.post) {
      console.log(`Getting comments for post ID: ${this.post.id}`);
      this.comments$ = this.commentService.getComments(this.post);
    }
    else {
      console.log("CommentsComponent: No post selected yet");
    }
  }
}

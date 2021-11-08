import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post';
import { Comment } from './comment';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({   providedIn: 'root'})
export class CommentService {

  private commentsUrl = environment.commentsApiBaseUrl + "/comments";

  constructor(private http: HttpClient) { }

  getComments(post: Post): Observable<Comment[]> {

    return this.http.get<Comment[]>(this.commentsUrl)
      .pipe(
        tap(_ => this.log(`Comment Service: fetched comments for post: ${post.id} via: GET:${this.commentsUrl}`)),
        catchError(this.handleError<Comment[]>('getComments', [])),
        map(comments => comments.filter(comment => comment.postId === post.id))      
      ) as Observable<Comment[]>;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`CommentService: ${message}`);
  }

}

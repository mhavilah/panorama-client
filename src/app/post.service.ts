import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Post } from './post';
import { UserPosts } from './userposts';
import { catchError, map, tap, mergeMap, filter, first, toArray } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {

  private postUrl = "/assets/usersposts.json"; // => api/users

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPosts(user: User): Observable<Post[]> {

    return this.http.get<UserPosts[]>(this.postUrl)
      .pipe(
        tap(_ => this.log(`Post Service: fetched posts for user: ${user.name} via: GET:${this.postUrl}`)),
        catchError(this.handleError<UserPosts[]>('getPosts', [])),
        map( userPosts => userPosts.filter(up => up.id === user.id)),
        // NB: mergeMap is flatMap.    A (possible) array of Post[] => Post[]
        mergeMap( userPosts => userPosts.map( userPosts => userPosts.posts))
    ) as Observable<Post[]>;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`PostService: ${message}`);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Post } from './post';
import { UserPosts } from './userposts';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({ providedIn: 'root' })
export class PostService {

  // private postUrl = "/assets/usersposts.json"; // => api/users
  private postUrl = environment.apiBaseUrl + "/usersAndPosts";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPosts(user: User, limit?: number|undefined): Observable<Post[]> {

    return this.http.get<UserPosts[]>(this.postUrl)
      .pipe(
        tap(_ => this.log(`Post Service: fetched ${limit ?? "all"} posts for user: ${user.name} via: GET:${this.postUrl}`)),
        catchError(this.handleError<UserPosts[]>('getPosts', [])),
        map( userPosts => userPosts.filter(up => up.id === user.id)),
        // NB: mergeMap is flatMap.    A (possible) array of Post[] => Post[]
        mergeMap( userPosts => userPosts.map( userPosts => userPosts.posts)),
        // Take the first 'limit' entries (or, takeAll if undefined)
        map( posts => posts.slice(0, limit)),
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

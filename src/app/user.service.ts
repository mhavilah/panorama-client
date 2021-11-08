import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userUrl = environment.apiBaseUrl+"/usersAndPosts";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap( _ => this.log(`User Service: fetched users via: GET:${this.userUrl}`)),
        catchError(this.handleError<User[]>('getUsers', []))
      );      
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    // TODO
    //this.messageService.add(`UserService: ${message}`);
    console.log(`UserService: ${message}`);
  }
}

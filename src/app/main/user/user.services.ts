import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Users } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/users/1/albums';
  }

  getUsers() {
    return this.httpClient.get(this.url).
        pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        );
    }

    public deleteUser(id) {
      this.httpClient.delete(this.url+ '/' +id).subscribe(data => {
        console.log(data);
      });
    }

    find(id): Observable<Users> {
      return this.httpClient.get<Users>(this.url + 'users/1/albums' + id);
    }

    updateUser(id, post) {
    this.httpClient.put(this.url + 'users/1/albums' + id, JSON.stringify(post));
    }

     addUser(user: Users) {
      this.httpClient.post(this.url , user);
    }

    }

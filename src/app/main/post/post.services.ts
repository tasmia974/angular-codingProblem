import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/users/1/posts';
  }

  getPosts() {
    return this.httpClient.get(this.url).
        pipe(
           map((data: Post[]) => {
             return data;
           })
        );
    }

    public deletePost(id) {
      this.httpClient.delete(this.url + '/' + id).subscribe(data => {
        console.log(data);
      });
    }

    find(id): Observable<Post> {
      return this.httpClient.get<Post>(this.url + 'users/1/posts' + id);
    }

    updatePost(id, post) {
    this.httpClient.put(this.url + 'users/1/posts' + id, JSON.stringify(post));
    }

    public addPost(post: Post) {
      this.httpClient.post(this.url , post);
    }


    }

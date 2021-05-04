import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Comments } from './model/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCommentService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  }

  getcomment() {
    return this.httpClient.get(this.url).
        pipe(
           map((data: Comments[]) => {
             return data;
           })
        );
    }

    public deletecomment(id) {
      this.httpClient.delete(this.url + '/' + id).subscribe(data => {
        console.log(data);
      });
    }


    find(id): Observable<Comments> {
      return this.httpClient.get<Comments>(this.url + 'posts/1/comments/' + id);
    }

    // find(id) {
    //   this.httpClient.get(this.url + 'posts/1/comments' + id);
    // }

    updateComment(id, post) {
    this.httpClient.put(this.url + 'posts/1/comments' + id, JSON.stringify(post));
    }

    public addComment(comment: Comments) {
      this.httpClient.post(this.url , comment);
    }


    }

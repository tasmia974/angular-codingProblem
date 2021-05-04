import { Component, OnInit } from '@angular/core';
import { Post } from '../post/model/post.model';
import { Users } from '../user/model/user.model';
import { ApiService } from '../user/user.services';
import { ApiPostService } from '../post/post.services';
import { Comments } from '../comment/model/comment.model';
import { ApiCommentService } from '../comment/comment.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[];
  users: Users[];
  comments: Comments[];

  constructor(private apiService: ApiService,
              private service: ApiPostService,
              private commentService: ApiCommentService
  ) { }
  ngOnInit() {
    this.getUserList();
    this.getpostsList();
    this.getCommentList();
  }
  getUserList() {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  getpostsList() {
    this.service.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  getCommentList() {
    this.commentService.getcomment().subscribe((data: any) => {
      this.comments = data;
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCommentService } from '../../comment/comment.services';
import { Comments } from '../../comment/model/comment.model';
import { Users } from '../../user/model/user.model';
import { Post } from '../model/post.model';
import { ApiPostService } from '../post.services';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  public postForm: FormGroup;
  public post: Post;
  id: number;
  ready = false;
  comments: Comments;

  constructor(public http: HttpClient,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private service: ApiCommentService,
              private apiService: ApiPostService) { }

ngOnInit(): void {

  this.id = Number(this.route.snapshot.params.postId);
  this.apiService.getPosts().subscribe((post: Post[]) => {
    this.post = post.find(post_ => post_.id === this.id);
    this.postForm = new FormGroup({
      name: new FormControl('', []),
      title: new FormControl(this.post.title, []),
      body: new FormControl(this.post.body, [] )
    });
    this.ready = true;
  });

    this.getCommentList();
}



getCommentList() {
  this.service.getcomment().subscribe((data: any) => {
    this.comments = data;
  });
}
  get f() {
    return this.postForm.controls;
  }

  save() {
    const post: Post = this.postForm.value;
    this.apiService.updatePost(this.id, this.postForm.value);
    console.log(this.postForm.value);

  }

}

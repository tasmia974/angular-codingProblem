import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Post } from '../model/post.model';
import { ApiPostService } from '../post.services';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public postForm: FormGroup;
  public post: Post;

  private bsModalRef: BsModalRef;
  constructor(public http: HttpClient,
              private formBuilder: FormBuilder,
              private apiService: ApiPostService) { }

  ngOnInit() {
    this.initForm();
  }

  public async save() {
    const post: Post = this.postForm.value;
    this.apiService.addPost(post);
  }

  private initForm() {
    this.postForm = this.formBuilder.group({
      id: ['', []],
      title: ['', []],
      body: ['', []],
    });
  }
}


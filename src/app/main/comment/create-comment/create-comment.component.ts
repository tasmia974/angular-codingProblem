import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiCommentService } from '../comment.services';
import { Comments } from '../model/comment.model';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  public commentForm: FormGroup;
  public comment: Comments;

  constructor(public http: HttpClient,
              private formBuilder: FormBuilder,
              private apiService: ApiCommentService) { }

  ngOnInit() {
    this.initForm();
  }

  public async save() {
    const comment: Comments = this.commentForm.value;
    this.apiService.addComment(comment);
  }

  private initForm() {
    this.commentForm = this.formBuilder.group({
      id: ['', []],
      title: ['', []],
      body: ['', []],
    });
  }
}

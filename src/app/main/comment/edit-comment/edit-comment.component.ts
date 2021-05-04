import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCommentService } from '../comment.services';
import { Comments } from '../model/comment.model';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  //   public commentForm: FormGroup;
  //   public comment: Comments;
  //   id: number;
  //   ready= false;

  //   constructor(public http: HttpClient,
  //               private formBuilder: FormBuilder,
  //               private route: ActivatedRoute,
  //               private apiService: ApiService) { }

  //   ngOnInit() {
  //     const routeParams = this.route.snapshot.paramMap;
  //     const FromRoute = Number(routeParams.get('commentId'));
  //     this.apiService.find(posts => posts.id === FromRoute);
  // }

  //   public async save() {
  //    await this.apiService.updateComment(this.id, this.commentForm.value);
  //   }

  //   public initForm() {
  //     console.log(this.commentForm.value)
  //     this.commentForm = this.formBuilder.group({
  //       id: [this.comment.id, []],
  //       name: ['', []],
  //       email: ['', []],
  //       body: ['', []],
  //     });
  //     this.ready = true;
  //   }

  public commentForm: FormGroup;
  public comment: Comments;
  id: number;
  ready = false;

  constructor(
    public http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiCommentService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['commentId']);
    this.apiService.getcomment().subscribe((comments: Comments[]) => {
      this.comment = comments.find(comment_=> comment_.id === this.id);
      this.commentForm = new FormGroup({
        name: new FormControl(this.comment.name, []),
        email: new FormControl(this.comment.email, []),
        body: new FormControl(this.comment.body, [] )
      });
      this.ready = true;
    });
  }

  get f() {
    return this.commentForm.controls;
  }

  save() {
    const comment: Comments = this.commentForm.value;
    this.apiService.updateComment(this.id, this.commentForm.value);
    console.log(this.commentForm.value);

  }

}

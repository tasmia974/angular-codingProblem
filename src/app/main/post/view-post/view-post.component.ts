import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiCommentService } from '../../comment/comment.services';
import { CreateCommentComponent } from '../../comment/create-comment/create-comment.component';
import { Comments } from '../../comment/model/comment.model';
import { ConfirmationDialogService } from '../../confirmation-dialog-component/confirmation-dialog.service';
import { Post } from '../model/post.model';
import { ApiPostService } from '../post.services';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  id: number;
  post: Post;
  private bsModalRef: BsModalRef;
  comments: Comments[];

  constructor(
    private confirmationDialogService: ConfirmationDialogService,
    public apiService: ApiPostService,
    public service: ApiCommentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['postId']);
    this.apiService.getPosts().subscribe((post: Post[]) => {
      this.post = post.find(post_ => post_.id === this.id);
    });
    this.getCommentList();

  }
  getCommentList() {
    this.service.getcomment().subscribe((data: any) => {
      this.comments = data;
    });
  }

  delete(comment: Comments) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete the comment?')
      .then((confirmed: any) => {
        if (confirmed) {
          this.service.deletecomment(comment.id);
          this.comments = this.comments.filter(item => item.id !== comment.id);
        }
      });
  }

}

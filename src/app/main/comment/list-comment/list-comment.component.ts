import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationDialogService } from '../../confirmation-dialog-component/confirmation-dialog.service';
import { ApiCommentService } from '../comment.services';
import { Comments } from '../model/comment.model';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

  comments: Comments[];

  constructor(private confirmationDialogService: ConfirmationDialogService,
              public http: HttpClient, private apiService: ApiCommentService) { }

  ngOnInit() {
    this.getCommentList();
  }
  getCommentList() {
    this.apiService.getcomment().subscribe((data: any) => {
      this.comments = data;
    });
  }

  delete(comment: Comments) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete the post?')
      .then( (confirmed: any) => {
        if (confirmed) {
            this.apiService.deletecomment(comment.id);
            this.comments = this.comments.filter(item => item.id !== comment.id);
      }
    });
  }
}

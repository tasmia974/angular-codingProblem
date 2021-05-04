import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCommentService } from '../comment.services';
import { Comments } from '../model/comment.model';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  id: number;
  comment: Comments;
  constructor(
    public apiService: ApiCommentService,
    private route: ActivatedRoute,
   ) { }

   ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['commentId']);
    this.apiService.getcomment().subscribe((comments: Comments[]) => {
      this.comment = comments.find(comment_=> comment_.id === this.id);
    });
  }
}

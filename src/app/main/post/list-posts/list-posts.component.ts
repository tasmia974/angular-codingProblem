import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationDialogService } from '../../confirmation-dialog-component/confirmation-dialog.service';
import { CreatePostComponent } from '../create-post/create-post.component';
import { Post } from '../model/post.model';
import { ApiPostService } from '../post.services';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  private bsModalRef: BsModalRef;
  posts: Post[];

  constructor(private confirmationDialogService: ConfirmationDialogService,
              private modalService: BsModalService,
              public http: HttpClient, private apiService: ApiPostService) { }

  ngOnInit() {
    this.getpostsList();
  }
  getpostsList() {
    this.apiService.getPosts().subscribe((data: any) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  delete(post: Post) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete the post?')
      .then( (confirmed: any) => {
        if (confirmed) {
            this.apiService.deletePost(post.id);
            this.posts = this.posts.filter(item => item.id !== post.id);
      }
    });
  }
  createPost(){
    this.bsModalRef = this.modalService.show(CreatePostComponent, {
    });
    this.bsModalRef.setClass('modal-md');
  }
}

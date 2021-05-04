import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateCommentComponent } from './create-comment/create-comment.component';

@NgModule({
  declarations: [CreateCommentComponent, EditCommentComponent, ViewCommentComponent, ListCommentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ListCommentComponent
      },
      {
       path: 'comment/:commentId',
        component: EditCommentComponent
      },
      {
        path: '',
        component: ViewCommentComponent
       },
      {
        path: 'comment/:commentId/view',
        component: ViewCommentComponent
       }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  entryComponents: [
    CreateCommentComponent, EditCommentComponent, ViewCommentComponent, ListCommentComponent],
  providers: [],
})
export class CommentModule { }

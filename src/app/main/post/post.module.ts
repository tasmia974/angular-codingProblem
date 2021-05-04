import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewPostComponent } from './view-post/view-post.component';

@NgModule({
  declarations: [CreatePostComponent, EditPostComponent, ListPostsComponent, ViewPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ListPostsComponent
      },
      {
       path: 'post/:postId',
        component: EditPostComponent
      },
      {
        path: 'post/:postId/view',
        component: ViewPostComponent
       }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  entryComponents: [
    CreatePostComponent, EditPostComponent, ListPostsComponent],
  providers: [],
})
export class PostModule { }

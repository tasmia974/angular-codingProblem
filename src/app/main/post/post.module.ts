import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [CreatePostComponent, EditPostComponent, ListPostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'list',
        component: ListPostsComponent
      },

    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  entryComponents: [
    CreatePostComponent, EditPostComponent, ListPostsComponent],
  providers: [],
})
export class PostModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from './confirmation-dialog-component/confirmation-dialog-component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ConfirmationDialogComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.PostModule),
      },
      {
        path: 'comment',
        loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule),
      },
    ])
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class MainModule { }

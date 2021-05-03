import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentComponent } from './comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // DashboardModule,
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
      // {
      //   path: 'post',
      //   loadChildren: () => import('./post/posts.module').then(m => m.PostModule)
      // },
      // {
      //   path: 'tickets',
      //   loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
      // },
    ])
  ],
})
export class MainModule { }

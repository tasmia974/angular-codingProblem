import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    ListUsersComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'list',
        component: ListUsersComponent
      },

    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  entryComponents: [
    CreateUserComponent,
    EditUserComponent,
    ListUsersComponent],
  providers: [],
})
  export class UserModule {}

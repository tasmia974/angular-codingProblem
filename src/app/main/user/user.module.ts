import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    ListUsersComponent,],

  imports: [
    CommonModule,
    FormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ListUsersComponent
      },
      {
        path: 'user/:userId',
        component: EditUserComponent
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

import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../../confirmation-dialog-component/confirmation-dialog.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateUserComponent } from '../create-user/create-user.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../user.services';
import { Users } from '../model/user.model';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  private bsModalRef: BsModalRef;
  users: Users[];
  status;
  constructor(private confirmationDialogService: ConfirmationDialogService,
    private modalService: BsModalService,
    public http: HttpClient, private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  delete(user: Users) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete the user?')
      .then((confirmed: any) => {
        if (confirmed) {
          this.apiService.deleteUser(user.id);
          this.users = this.users.filter(item => item.id !== user.id);
        }
      });
  }

  createUser() {
    this.bsModalRef = this.modalService.show(CreateUserComponent, {
    });
    this.bsModalRef.setClass('modal-md');
  }

}

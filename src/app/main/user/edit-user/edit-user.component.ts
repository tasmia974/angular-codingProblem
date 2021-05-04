import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../model/user.model';
import { ApiService } from '../user.services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public userForm: FormGroup;
  public user: Users;
  id: number;
  ready = false;

  constructor(public http: HttpClient,
              private route: ActivatedRoute,
              private apiService: ApiService) { }

ngOnInit(): void {

  this.id = Number(this.route.snapshot.params.userId);
  this.apiService.getUsers().subscribe((user: Users[]) => {
    this.user = user.find(user_ => user_.id === this.id);
    this.userForm = new FormGroup({
      title: new FormControl(this.user.title, []),

    });
    this.ready = true;
  });

}



  get f() {
    return this.userForm.controls;
  }

  save() {
    const  user: Users = this.userForm.value;
    this.apiService.updateUser(this.id, this.userForm.value);
    console.log(this.userForm.value);

  }

}

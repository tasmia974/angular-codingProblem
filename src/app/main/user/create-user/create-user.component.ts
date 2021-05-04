import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Users } from '../model/user.model';
import { ApiService } from '../user.services';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // public userForm: FormGroup;
  // public user: Users;

  // constructor(
  //             private formBuilder: FormBuilder,
  //             private apiService: ApiService) { }

  // ngOnInit() {
  //   this.initForm();
  // }

  // public save() {
  //   const user: Users = this.userForm.value;
  //   this.apiService.addUser(user);
  // }

  // private initForm() {
  //   this.userForm = this.formBuilder.group({
  //     username: ['', []],
  //     name: ['', []],
  //     email: ['', []],
  //     address: ['', []],
  //   });
  // }
  public postForm: FormGroup;
    public user: Users;


  constructor(public http: HttpClient,
              private formBuilder: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit() {
    this.initForm();
  }

  public save() {
    const post: Users = this.postForm.value;
    this.apiService.addUser(post);
  }

  private initForm() {
    this.postForm = this.formBuilder.group({
      id: ['', []],
      name: ['', []],
      username: ['', []],
      email: ['', []],
      address: ['', []],
    });
  }
}





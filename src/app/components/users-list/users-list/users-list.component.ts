import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../services/users-service.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private userList: Array<User>;

  constructor(private userService: UsersService) {

  }

  ngOnInit() {
    // this.userList = this.userService.getUsersList();
    this.userService.getAjaxUsersList().subscribe(res=>{
      this.userList = res;
    })
  }

}

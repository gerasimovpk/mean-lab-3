import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public getUsersList(): Array<User> {
    return [
      <User> {
        age: 22,
        name: "User 1",
        superPower : true
      },
      <User> {
        age: 21,
        name: "User 2",
        superPower : false
      },
      <User> {
        age: 29,
        name: null,
        superPower : false
      }
    ]
  }

  public getAjaxUsersList(): Observable <any> {
    return this.http.get("http://ya.ru")
      .map((res) => [
        <User> {
          age: 22,
          name: "Remote User 1",
          superPower : true
        },
        <User> {
          age: 21,
          name: "Remote User 2",
          superPower : false
        },
        <User> {
          age: 29,
          name: null,
          superPower : false
        }
      ] as Array<User>)

  }

}

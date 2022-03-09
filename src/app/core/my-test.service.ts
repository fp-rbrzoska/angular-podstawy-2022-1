import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  private _users: User[] = []

  get users() {
    return this._users;
  }
  constructor() { }

  addUser(user: User) {
    this._users.push(user);
  }
}

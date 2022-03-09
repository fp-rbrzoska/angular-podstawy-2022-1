import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../core/my-test.service';
import { User } from '../models/User';

@Component({
  selector: 'fp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  users: User[];

  constructor(private _testService: MyTestService) {
    this.users = this._testService.users
  }

  ngOnInit(): void {
  }

  addUser(){
    this._testService.addUser({
      age: 15,
      name: 'Tom',
      isOnline: false
    })
  }
}

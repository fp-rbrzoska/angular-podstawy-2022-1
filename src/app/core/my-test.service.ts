import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators'
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  private _users: User[] = []

  get users() {
    return this._users;
  }
  constructor() {
    // let myPromise  = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject('oh no!')
    //   },1000)
    //   setTimeout(() => {
    //     resolve('hey!')
    //   },3000)
    // })
    // myPromise.then(val => console.log(val))

    // const obs = new Observable<number>(obs => {
    //   obs.next(1)
    //   obs.next(2)
    //   obs.next(7)
    //   obs.next(10);
    // });

    const obs = of(1, 2, 7, 10, 15)

    obs.pipe(
      map(val => val * 2),
      filter(val => val > 10)
    ).subscribe(v => console.log(v))

    const mySubj = new Subject();

    mySubj.next('a');
    mySubj.next('b');
    mySubj.subscribe(v => console.log(v));
    mySubj.next('c');
    mySubj.next('d');

    const myBSubj = new BehaviorSubject('aa')
    myBSubj.next('bb');

    myBSubj.subscribe(v => console.log(v));
    myBSubj.next('cc');
    myBSubj.next('dd');

    console.log(myBSubj.value)
  }

  addUser(user: User) {
    this._users.push(user);
  }
}

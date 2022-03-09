import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedInSubj = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this._isLoggedInSubj.value;
  }

  isLoggedIn$ = this._isLoggedInSubj.asObservable();

  constructor() { }

  logIn() {
    this._isLoggedInSubj.next(true)
  }

  logout() {
    this._isLoggedInSubj.next(false)
  }
}

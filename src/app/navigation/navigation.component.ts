import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'fp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  isLoggedIn!: boolean;
  isLoggedIn$: Observable<boolean>
  // subscription!: Subscription;
  constructor(private _authService: AuthService) {
    this.isLoggedIn$ = _authService.isLoggedIn$;
  }

  ngOnInit(): void {
    // this.subscription = this._authService.isLoggedIn$.subscribe(v => this.isLoggedIn = v)
  }
  logIn() {
    this._authService.logIn();
  }

  ngOnDestroy(): void {
     // this.subscription.unsubscribe()
  }

}

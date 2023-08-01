import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, map, takeUntil } from 'rxjs';

import { loginActions } from './login.actions';

@Component({
  selector: 'tt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private _returnUrl: string | undefined;
  private _unsubscribe = new Subject<void>();

  constructor(private _router: Router, private _route: ActivatedRoute, private _store: Store) {}

  ngOnInit(): void {
      this._route.paramMap.pipe(
        filter(paramMap => paramMap.has('returnUrl')),
        map(paramMap => paramMap.get('returnUrl') ?? '/'),
        takeUntil(this._unsubscribe)
      ).subscribe(returnUrl => this._returnUrl = returnUrl);
  }

  ngOnDestroy(): void {
      this._unsubscribe.next();
      this._unsubscribe.complete();
  }

  onRoleSelected(role: 'admin' | 'user'): void {
    this._store.dispatch(loginActions.login({ role }));

    if (this._returnUrl) {
      this._router.navigateByUrl(this._returnUrl);
    } else if (role === 'user') {
      this._router.navigateByUrl('/viewStatus');
    } else {
      this._router.navigateByUrl('/manageStatus');
    }
  }
}

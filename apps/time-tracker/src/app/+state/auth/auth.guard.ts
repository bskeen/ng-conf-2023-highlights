import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { authSelectors } from './auth.selector';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _store: Store, private _router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._store.select(authSelectors.getCurrentRole).pipe(
      take(1),
      map(role => {
        if (role === '') {
          return this._router.parseUrl('/login');
        }

        return true;
      })
    )
  }
}

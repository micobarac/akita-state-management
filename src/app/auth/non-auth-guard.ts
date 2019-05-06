import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthQuery } from './state/auth.query';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(private router: Router, private authQuery: AuthQuery) {}

  canActivate(): Observable<boolean> {
    return this.authQuery.isLoggedIn$.pipe(
      take(1),
      switchMap((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigate(['']);
        }
        return of(!isLoggedIn);
      })
    );
  }
}

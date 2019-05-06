import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthDataService } from './auth-data.service';
import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authStore: AuthStore, private authDataService: AuthDataService) {}

  login(creds: any) {
    return this.authDataService.login(creds).pipe(tap(auth => this.authStore.login(auth)));
  }

  logout() {
    this.authStore.logout();
  }
}

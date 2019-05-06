import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as storage from '../storage';

export type AuthState = {
  name: string;
  token: string;
};

export function createInitialAuthState(): AuthState {
  return {
    name: null,
    token: null,
    ...storage.getAuth()
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialAuthState());
  }

  login(auth: AuthState) {
    this.update(auth);
    storage.saveAuth(auth);
  }

  logout() {
    storage.clearAuth();
    this.update(createInitialAuthState());
  }
}

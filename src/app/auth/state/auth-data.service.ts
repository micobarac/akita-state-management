import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  login(_creds: any) {
    return timer(300).pipe(mapTo({ name: 'Captain America', token: 'token' }));
  }
}

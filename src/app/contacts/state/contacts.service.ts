import { Injectable } from '@angular/core';
import { PaginationResponse } from '@datorama/akita';
import { Observable } from 'rxjs';
import { getContacts } from '../contacts.data';
import { Contact, Params } from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  getPage(params: Params): Observable<PaginationResponse<Contact>> {
    return getContacts(params);
  }
}

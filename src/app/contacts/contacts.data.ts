import * as faker from 'faker';
import { sortBy } from 'lodash';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Params } from './state/contact.model';

const count = 100;
const data = [];

for (let i = 0; i < count; i++) {
  data.push({
    id: faker.random.number(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    address: faker.address.streetAddress()
  });
}

export function getData(params = { sortBy: 'email', perPage: 10, page: 1 }) {
  const offset = (params.page - 1) * +params.perPage;
  const sorted = sortBy(contacts, params.sortBy);
  const paginatedItems = sorted.slice(offset, offset + +params.perPage);

  return {
    currentPage: params.page,
    perPage: +params.perPage,
    total: contacts.length,
    lastPage: Math.ceil(contacts.length / +params.perPage),
    data: paginatedItems
  };
}

export const getContacts = function(params: Params) {
  return timer(300).pipe(mapTo(getData(params)));
};
export const contacts = data;

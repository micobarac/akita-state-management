import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable, of, timer } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { products } from '../products.mocks';
import { ProductsQuery } from './products.query';
import { ProductsStore } from './products.store';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private productsStore: ProductsStore, private productsQuery: ProductsQuery) {}

  get(): Observable<void> {
    const request = timer(500).pipe(
      mapTo(products),
      map(response => this.productsStore.set(response))
    );

    return this.productsQuery.getHasCache() ? of() : request;
  }

  getProduct(id: ID) {
    const product = products.find(product => product.id === +id);

    return timer(500).pipe(
      mapTo(product),
      map(() => this.productsStore.add(product))
    );
  }
}

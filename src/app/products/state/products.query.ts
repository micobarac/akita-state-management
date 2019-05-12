import { Injectable } from '@angular/core';
import { QueryConfig, QueryEntity } from '@datorama/akita';
import { Product } from './products.model';
import { ProductsState, ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
@QueryConfig({ sortBy: 'price' })
export class ProductsQuery extends QueryEntity<ProductsState, Product> {
  constructor(protected store: ProductsStore) {
    super(store);
  }

  getProducts(term: string, sortBy: keyof Product) {
    return this.selectAll({
      sortBy,
      filterBy: entity => entity.title.toLowerCase().includes(term)
    });
  }
}

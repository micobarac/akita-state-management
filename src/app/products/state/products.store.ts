import { Injectable } from '@angular/core';
import { EntityState, EntityStore, MultiActiveState, StoreConfig } from '@datorama/akita';
import { Product } from './products.model';

export interface ProductsState extends EntityState<Product>, MultiActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super({ active: [] });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { combineLatest, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { CartService } from '../cart/state/cart.service';
import { Product } from './state/products.model';
import { ProductsQuery } from './state/products.query';
import { ProductsService } from './state/products.service';

@Component({
  selector: 'app-products',
  templateUrl: `./products.component.html`
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  search = new FormControl();
  sort = new FormControl('title');

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private productsQuery: ProductsQuery
  ) {}

  ngOnInit() {
    this.productsService
      .get()
      .pipe(untilDestroyed(this))
      .subscribe();
    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = combineLatest(
      this.search.valueChanges.pipe(startWith('')),
      this.sort.valueChanges.pipe(startWith('title'))
    ).pipe(switchMap(([term, sortBy]) => this.productsQuery.getProducts(term, sortBy as keyof Product)));
  }

  add({ id }: Product) {
    this.cartService.add(id);
  }

  subtract({ id }: Product) {
    this.cartService.subtract(id);
  }

  ngOnDestroy() {}
}

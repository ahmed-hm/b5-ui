import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductsActions } from '@state/product/product.actions';
import { productsSelector } from '@state/product/product.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$ = this.store.select(productsSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onScroll(skip: number, limit: number = 10) {
    this.store.dispatch(getProductsActions({ skip, limit }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from '@interfaces/category.interface';
import { Store } from '@ngrx/store';
import { categoriesSelector } from '@state/category/category.selectors';
import { getProductsActions, setSelectedCategoryActions } from '@state/product/product.actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categories$ = this.store.select(categoriesSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  filterByCategory(category: Category) {
    this.store.dispatch(setSelectedCategoryActions({ category }));
    this.store.dispatch(getProductsActions({ limit: 10, skip: 0 }));
  }
}

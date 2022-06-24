import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCategoriesAction } from './core/state/category/category.actions';
import { getProductsActions } from './core/state/product/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b5digital-ui-task';

  constructor(private store: Store) {
    this.store.dispatch(getCategoriesAction());
    this.store.dispatch(getProductsActions({ skip: 0, limit: 10 }));
  }
}

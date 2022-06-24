import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ProductService } from '@services/product.service';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { getProductsActions, getProductsSuccessActions, GET_PRODUCTS_FAILURE } from '../state/product/product.actions';
import { selectedCategorySelector } from '../state/product/product.selectors';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductsActions),
      withLatestFrom(this.store.select(selectedCategorySelector)),
      mergeMap(([{ limit, skip, search }, category]) =>
        this.productService.getProducts({ limit, skip, category, search }).pipe(
          map(({ products }) => getProductsSuccessActions({ products })),
          catchError((error) => of({ type: GET_PRODUCTS_FAILURE, error }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductService, private store: Store) {}
}

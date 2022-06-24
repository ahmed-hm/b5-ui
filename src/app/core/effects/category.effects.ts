import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '@services/category.service';
import { getCategoriesAction, GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from '@state/category/category.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class categoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesAction),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => ({ type: GET_CATEGORIES_SUCCESS, categories })),
          catchError((error) => of({ type: GET_CATEGORIES_FAILURE, error }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private categoryService: CategoryService) {}
}

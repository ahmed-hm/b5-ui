import { CategoriesState } from '@interfaces/category.interface';
import { createReducer, on } from '@ngrx/store';
import { getCategoriesFailureAction, getCategoriesSuccessAction } from './category.actions';

export const categoryInitialState: CategoriesState = {
  categories: []
};

export const categoryReducer = createReducer(
  categoryInitialState,
  on(getCategoriesSuccessAction, (state, { categories }) => ({ categories })),
  on(getCategoriesFailureAction, (state, { error }) => state)
);

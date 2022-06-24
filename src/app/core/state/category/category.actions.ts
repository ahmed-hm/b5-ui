import { Category } from '@interfaces/category.interface';
import { createAction, props } from '@ngrx/store';

export const GET_CATEGORIES = '[Category] Get Categories';
export const GET_CATEGORIES_SUCCESS = '[Category] Get Categories Success';
export const GET_CATEGORIES_FAILURE = '[Category] Get Categories Failure';

export const getCategoriesAction = createAction(GET_CATEGORIES);
export const getCategoriesSuccessAction = createAction(GET_CATEGORIES_SUCCESS, props<{ categories: Category[] }>());
export const getCategoriesFailureAction = createAction(GET_CATEGORIES_FAILURE, props<{ error: any }>());

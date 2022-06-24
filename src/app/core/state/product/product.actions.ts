import { Category } from '@interfaces/category.interface';
import { Product } from '@interfaces/product.interface';
import { createAction, props } from '@ngrx/store';

export const GET_PRODUCTS = '[Product] Get Products';
export const GET_PRODUCTS_SUCCESS = '[Product] Get Products Success';
export const GET_PRODUCTS_FAILURE = '[Product] Get Products Failure';
export const SET_SELECTED_CATEGORY = '[Category] Set Selected Category';
export const SET_SEARCH = '[Product] Set Search';

export const getProductsActions = createAction(GET_PRODUCTS, props<{ search?: string; skip: number; limit: number }>());
export const getProductsSuccessActions = createAction(GET_PRODUCTS_SUCCESS, props<{ products: Product[] }>());
export const getProductsFailureActions = createAction(GET_PRODUCTS_FAILURE, props<{ error: any }>());
export const setSelectedCategoryActions = createAction(SET_SELECTED_CATEGORY, props<{ category: Category }>());
export const setSearchActions = createAction(SET_SEARCH, props<{ search: string }>());

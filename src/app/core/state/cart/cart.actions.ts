import { Product } from '@interfaces/product.interface';
import { createAction, props } from '@ngrx/store';

export const GET_CART = '[Cart] Get Cart';
export const ADD_TO_CART = '[Cart] Add to Cart';

export const getCartAction = createAction(GET_CART);
export const addToCartAction = createAction(ADD_TO_CART, props<{ product: Product }>());

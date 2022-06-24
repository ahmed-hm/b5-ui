import { Cart } from '@interfaces/cart.interface';
import { createReducer, on } from '@ngrx/store';
import { addToCartAction, getCartAction } from './cart.actions';

export const cartInitialState: Cart = {
  products: [],
  totalProducts: 0
};

export const cartReducer = createReducer(
  cartInitialState,
  on(getCartAction, (state) => state),
  on(addToCartAction, (state, { product }) => ({ totalProducts: state.totalProducts + 1, products: [...state.products, product] }))
);

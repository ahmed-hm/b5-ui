import { Cart } from '@interfaces/cart.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const CartStateSelector = createFeatureSelector<Cart>('cart');
export const CartProductsSelector = createSelector(CartStateSelector, (state: Cart) => state.products);
export const CartTotalProductsSelector = createSelector(CartStateSelector, (state: Cart) => state.totalProducts);

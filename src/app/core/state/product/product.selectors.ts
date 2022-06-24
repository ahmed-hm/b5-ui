import { ProductsState } from '@interfaces/product.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const productStateSelector = createFeatureSelector<ProductsState>('product');
export const productsSelector = createSelector(productStateSelector, (state: ProductsState) => state.products);
export const selectedCategorySelector = createSelector(productStateSelector, (state: ProductsState) => state.selectedCategory);
export const searchTermSelector = createSelector(productStateSelector, (state: ProductsState) => state.search);

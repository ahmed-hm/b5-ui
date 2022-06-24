import { ProductsState } from '@interfaces/product.interface';
import { createReducer, on } from '@ngrx/store';
import {
  getProductsFailureActions,
  getProductsSuccessActions,
  setSearchActions,
  setSelectedCategoryActions
} from './product.actions';

export const productInitialState: ProductsState = {
  products: [],
  selectedCategory: '',
  search: ''
};

export const productReducer = createReducer(
  productInitialState,
  on(getProductsSuccessActions, (state, { products }) => {
    return { ...state, products: [...state.products, ...products] };
  }),
  on(getProductsFailureActions, (state, { error }) => state),
  on(setSelectedCategoryActions, (state, { category }) => ({
    ...state,
    selectedCategory: category,
    search: undefined,
    products: []
  })),
  on(setSearchActions, (state, { search }) => ({ ...state, selectedCategory: undefined, search: search, products: [] }))
);

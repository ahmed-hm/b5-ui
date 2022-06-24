import { CategoriesState } from '@interfaces/category.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const categoriesStateSelector = createFeatureSelector<CategoriesState>('category');
export const categoriesSelector = createSelector(categoriesStateSelector, (state: CategoriesState) => state.categories);

import { AppState } from '../../rootReducer';

export const getCategoriesLoading = (state: AppState) =>
  state.categories.loading;
export const getCategories = (state: AppState) => state.categories.data;
export const getCategoriesError = (state: AppState) => state.categories.error;

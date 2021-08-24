import { AppState } from '../../rootReducer';

export const getProductsLoading = (state: AppState) => state.products.loading;
export const getProducts = (state: AppState) => state.products.data;
export const getProductsError = (state: AppState) => state.products.error;

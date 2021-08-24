import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actionTypes';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductState {
  loading: boolean;
  data: IProduct[];
  error: string | null;
}

export interface FetchProductsSuccessPayload {
  products: IProduct[];
}

export interface FetchProductsFailurePayload {
  error: string;
}

export interface FetchProductsRequest {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export type FetchProductsSuccess = {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: FetchProductsSuccessPayload;
};

export type FetchProductsFailure = {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: FetchProductsFailurePayload;
};

export type ProductActions =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure;

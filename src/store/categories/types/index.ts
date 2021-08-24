import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actionTypes';

export interface CategoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

export interface FetchCategoriesSuccessPayload {
  categories: string[];
}
export interface FetchCategoriesFailurePayload {
  error: string;
}

export interface FetchCategoriesRequest {
  type: typeof FETCH_CATEGORIES_REQUEST;
}

export type FetchCategoriesSuccess = {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: FetchCategoriesSuccessPayload;
};

export type FetchCategoriesFailure = {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: FetchCategoriesFailurePayload;
};

export type CategoriesActions =
  | FetchCategoriesRequest
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;

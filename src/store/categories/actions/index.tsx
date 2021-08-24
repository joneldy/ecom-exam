import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actionTypes';

import {
  FetchCategoriesRequest,
  FetchCategoriesSuccess,
  FetchCategoriesSuccessPayload,
  FetchCategoriesFailure,
  FetchCategoriesFailurePayload,
} from '../types';

export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (
  payload: FetchCategoriesSuccessPayload
): FetchCategoriesSuccess => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (
  payload: FetchCategoriesFailurePayload
): FetchCategoriesFailure => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsSuccess, fetchProductsFailure } from '../actions';
import { FETCH_PRODUCTS_REQUEST } from '../actionTypes';

import { getProducts } from '../api';

function* fetchProductsSaga() {
  try {
    const response = yield call(getProducts);
    yield put(
      fetchProductsSuccess({
        products: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchProductsFailure({
        error: e.message,
      })
    );
  }
}

function* productsSaga() {
  yield all([takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga)]);
}

export default productsSaga;

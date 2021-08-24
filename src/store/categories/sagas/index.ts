import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions';
import { FETCH_CATEGORIES_REQUEST } from '../actionTypes';

import { getCategories } from '../api';

function* fetchCatgoriesSaga() {
  try {
    const response = yield call(getCategories);
    yield put(
      fetchCategoriesSuccess({
        categories: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchCategoriesFailure({
        error: e.message,
      })
    );
  }
}

function* categoriesSaga() {
  yield all([takeLatest(FETCH_CATEGORIES_REQUEST, fetchCatgoriesSaga)]);
}

export default categoriesSaga;

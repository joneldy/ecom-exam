import { all, fork } from 'redux-saga/effects';

import productsSaga from './products/sagas';
import categoriesSaga from './categories/sagas';

export function* rootSaga() {
  yield all([fork(productsSaga), fork(categoriesSaga)]);
}

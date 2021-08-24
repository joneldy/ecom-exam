import { select, all, put, takeEvery } from 'redux-saga/effects';
// import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';
import { getProducts } from '../../products/selectors';
import { getCartItems } from '../selectors';
import { IProductCart, IAddToCart, IRemoveFromCart } from '../types';
import { addToCartSuccess, removeFromCartSuccess } from '../actions';

function* addToCartFlow(action: IAddToCart) {
  const products = yield select(getProducts);
  const addedItems = yield select(getCartItems);

  let addedItem = products.find(
    (item: IProductCart) => item.id === action.payload.id
  );

  const existed_item = addedItems.find((item) => action.payload.id === item.id);

  const newItems = existed_item
    ? addedItems.map((item: IProductCart) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + action.payload.quantity!,
            }
          : item
      )
    : [...addedItems, { ...addedItem, quantity: action.payload.quantity! }];

  yield put(
    addToCartSuccess({
      addedItems: newItems,
    })
  );
}

function* removeCartFlow(action: IRemoveFromCart) {
  const addedItems = yield select(getCartItems);
  yield put(
    removeFromCartSuccess({
      addedItems: addedItems.filter(
        (item: IProductCart) => item.id !== action.payload.id
      ),
    })
  );
}

function* cartSaga() {
  yield all([
    takeEvery(ADD_TO_CART, addToCartFlow),
    takeEvery(REMOVE_FROM_CART, removeCartFlow),
  ]);
}

export default cartSaga;

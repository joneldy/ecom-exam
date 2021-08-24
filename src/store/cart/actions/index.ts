import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
} from '../actionTypes';

import {
  CartPayload,
  CartPayloadSuccess,
  IAddToCart,
  IAddToCartSuccess,
  IRemoveFromCartSuccess,
  IRemoveFromCart,
  ISubtractQuantity,
  IAddQuantity,
  IEmptyCart,
} from '../types';

export const addToCart = (payload: CartPayload): IAddToCart => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const addToCartSuccess = (
  payload: CartPayloadSuccess
): IAddToCartSuccess => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload,
  };
};

export const removeFromCart = (payload: CartPayload): IRemoveFromCart => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const removeFromCartSuccess = (
  payload: CartPayloadSuccess
): IRemoveFromCartSuccess => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload,
  };
};

export const subtractQuantity = (payload: CartPayload): ISubtractQuantity => {
  return {
    type: SUB_QUANTITY,
    payload,
  };
};

export const addQuantity = (payload: CartPayload): IAddQuantity => {
  return {
    type: ADD_QUANTITY,
    payload,
  };
};

export const emptyCart = (): IEmptyCart => {
  return {
    type: EMPTY_CART,
  };
};

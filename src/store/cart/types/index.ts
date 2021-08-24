import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
} from '../actionTypes';

export interface IProductCart {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export interface CartPayload {
  id: number;
  quantity?: number;
}

export interface CartPayloadSuccess {
  addedItems: IProductCart[];
}

export interface IAddToCart {
  type: typeof ADD_TO_CART;
  payload: CartPayload;
}

export interface IAddToCartSuccess {
  type: typeof ADD_TO_CART_SUCCESS;
  payload: CartPayloadSuccess;
}

export interface IRemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: CartPayload;
}

export interface IRemoveFromCartSuccess {
  type: typeof REMOVE_FROM_CART_SUCCESS;
  payload: CartPayloadSuccess;
}
export interface ISubtractQuantity {
  type: typeof SUB_QUANTITY;
  payload: CartPayload;
}

export interface IAddQuantity {
  type: typeof ADD_QUANTITY;
  payload: CartPayload;
}

export interface IEmptyCart {
  type: typeof EMPTY_CART;
}

export interface ICartState {
  addedItems: IProductCart[];
}

export type CartActions =
  | IAddToCart
  | IAddToCartSuccess
  | IRemoveFromCartSuccess
  | IRemoveFromCart
  | ISubtractQuantity
  | IAddQuantity
  | IEmptyCart;

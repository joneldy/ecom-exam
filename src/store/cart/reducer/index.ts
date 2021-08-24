import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART,
} from '../actionTypes';

import { CartActions, ICartState } from '../types';

const initialState: ICartState = {
  addedItems: [],
};

const CartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        addedItems: action.payload.addedItems,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        addedItems: state.addedItems.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        addedItems: state.addedItems.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1 === 0 ? 1 : item.quantity - 1,
              }
            : item;
        }),
      };
    case EMPTY_CART:
      return {
        ...state,
        addedItems: [],
      };
    default:
      return state;
  }
};

export default CartReducer;

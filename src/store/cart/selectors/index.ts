import { AppState } from '../../rootReducer';

export const getCartItems = (state: AppState) => state.cart.addedItems;

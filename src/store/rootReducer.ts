import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import productsReducer from './products/reducer';
import categoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

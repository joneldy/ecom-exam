import { combineReducers } from 'redux';

import productsReducer from './products/reducer';
import categoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

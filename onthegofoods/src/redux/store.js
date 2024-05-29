import { combineReducers } from 'redux';
import authReducer from './authReducer'; // authentication reducer
import cartReducer from './cartReducer'; // cart reducer

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;

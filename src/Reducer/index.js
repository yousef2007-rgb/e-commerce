import CartReducer from './CartReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    CartReducer: CartReducer
})
export default allReducers
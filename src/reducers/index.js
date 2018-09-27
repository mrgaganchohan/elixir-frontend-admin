import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import productsReducer from './productsReducer';


const allReducers = combineReducers({
    adminData: adminReducer,
    productData: productsReducer
})

export default allReducers;
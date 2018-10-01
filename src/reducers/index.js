import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';


const allReducers = combineReducers({
    adminData: adminReducer,
    productData: productsReducer,
    categoryData: categoryReducer
})

export default allReducers;
import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import subcategoryReducer from './subcategoryReducer';


const allReducers = combineReducers({
    adminData: adminReducer,
    productData: productsReducer,
    categoryData: categoryReducer,
    subCategoryData: subcategoryReducer
    
})

export default allReducers;
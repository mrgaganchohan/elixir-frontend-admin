import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import subcategoryReducer from './subcategoryReducer';
import { reducer as formReducer } from 'redux-form';


const allReducers = combineReducers({
    form: formReducer, // importing redux forms as a reducer
    adminData: adminReducer,
    productData: productsReducer,
    categoryData: categoryReducer,
    subCategoryData: subcategoryReducer,
    
    
});

export default allReducers;
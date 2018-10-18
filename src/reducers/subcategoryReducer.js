import {SUBCATEGORY_GET_ALL, SUBCATEGORY_GET_SUBCATEGORY, SUBCATEGORY_GET_BY_CATEGORY} from '../actions/types';

const initialState = {
    allSubCategories: [],
    allSubCategoriesByCategory: [],
    subCategory: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SUBCATEGORY_GET_ALL:
            // console.log("CATEGORY DATA BEING HIT REDUCER");
            return {
                ...state,
                allSubCategories: action.payload
            }
        case SUBCATEGORY_GET_SUBCATEGORY:
            return {
                ...state,
                subCategory: action.payload
            }
        case SUBCATEGORY_GET_BY_CATEGORY:
            return {
                ...state,
                allSubCategoriesByCategory: action.payload
            }
        default:
            return state;
    }
}
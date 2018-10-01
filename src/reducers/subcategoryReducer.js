import {SUBCATEGORY_GET_ALL, SUBCATEGORY_GET_SUBCATEGORY} from '../actions/types';

const initialState = {
    allSubCategories: [],
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
        default:
            return state;
    }
}
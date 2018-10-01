import {CATEGORY_GET_ALL, CATEGORY_GET_CATEGORY} from '../actions/types';

const initialState = {
    allCategories: [],
    category: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY_GET_ALL:
            console.log("product DATA BEING HIT REDUCER");
            return {
                ...state,
                allCategories: action.payload
            }
        case CATEGORY_GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}
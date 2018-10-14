import {CATEGORY_GET_ALL, CATEGORY_GET_CATEGORY, CATEGORY_UPDATE_CATEGORY, CATEGORY_ADD_CATEGORY} from '../actions/types';

const initialState = {
    allCategories: [],
    category: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY_GET_ALL:
            // console.log("CATEGORY DATA BEING HIT REDUCER");
            return {
                ...state,
                allCategories: action.payload
            }
        case CATEGORY_ADD_CATEGORY:
            //implement add category 
        case CATEGORY_GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case CATEGORY_UPDATE_CATEGORY:
            return state;
        default:
            return state;
    }
}

export const load = data => ({ type: CATEGORY_GET_ALL, data });
console.log("THIS IS THE LOAD",load);
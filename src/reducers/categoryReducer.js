import {CATEGORY_GET_ALL, CATEGORY_GET_CATEGORY} from '../actions/types';

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
        case CATEGORY_GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export const load = data => ({ type: CATEGORY_GET_ALL, data });
console.log("THIS IS THE LOAD",load);
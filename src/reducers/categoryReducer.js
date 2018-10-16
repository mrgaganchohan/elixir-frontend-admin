import {CATEGORY_GET_ALL, CATEGORY_GET_CATEGORY, CATEGORY_UPDATE_CATEGORY, CATEGORY_ADD_CATEGORY, CATEGORY_DELETE_CATEGORY} from '../actions/types';

const initialState = {
    allCategories: [],
    category: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY_GET_ALL:
            return {
                ...state,
                allCategories: action.payload
            }
        case CATEGORY_ADD_CATEGORY:
           return state;
        case CATEGORY_GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case CATEGORY_DELETE_CATEGORY:
            return state;
        case CATEGORY_UPDATE_CATEGORY:
            return state;
        default:
            return state;
    }
}

export const load = data => ({ type: CATEGORY_GET_ALL, data });
console.log("THIS IS THE LOAD",load);
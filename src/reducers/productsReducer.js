import {PRODUCTS_GET_ALL, PRODUCTS_GET_PRODUCT} from '../actions/types';

const initialState = {
    allProducts: [],
    product: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS_GET_ALL:
            console.log("product DATA BEING HIT REDUCER");
            return {
                ...state,
                allProducts: action.payload
            }
        case PRODUCTS_GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}
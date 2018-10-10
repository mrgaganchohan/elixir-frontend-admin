import {PRODUCTS_GET_ALL, PRODUCTS_GET_PRODUCT, PRODUCTS_ADD_PRODUCT, PRODUCTS_DELETE_PRODUCT_SUCCESS, PRODUCTS_DELETE_PRODUCT_FAILED} from '../actions/types';

const initialState = {
    allProducts: [],
    product: {},
    productDeleteMessage: "coming from redux reducer...",
    isError: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS_GET_ALL:
            return {
                ...state,
                allProducts: action.payload
            }
        case PRODUCTS_GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case PRODUCTS_DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                productDeleteMessage: action.payload,
                isError: false
            }
        case PRODUCTS_DELETE_PRODUCT_FAILED:
            return {
                ...state,
                productDeleteMessage: action.payload,
                isError: true
            }
        // case PRODUCTS_ADD_PRODUCT:
        //  return {
        //      ...state,
        //      images: [
        //          {
        //              name: action.url,
        //              sort: action.sort
        //          }
        //      ]
        //  }
        default:
            return state;
    }
}
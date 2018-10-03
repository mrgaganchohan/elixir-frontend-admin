//implement admin calls to api
import {API_ADDRESS, MICRO_PRODUCTS} from '../constants/constants';
import {PRODUCTS_GET_ALL, PRODUCTS_GET_PRODUCT, PRODUCTS_ADD_PRODUCT} from '../actions/types';
import axios from 'axios';

export const getAllProducts = () => dispatch => {
    console.log("attempting to get all products");
    axios.get(API_ADDRESS + MICRO_PRODUCTS + '/displayProducts')
    .catch(error => console.log(error.status))
    .then(res => res)
    .then(products => dispatch({
        type: PRODUCTS_GET_ALL,
        payload: products.data
    }));
}

export const getProduct = (id) => dispatch => {
    //console.log("get product info");
    axios.get(API_ADDRESS + MICRO_PRODUCTS + `/getByProductId/${id}`)
    .catch(error => console.log(error.status))
    .then(res => res)
    .then(product => dispatch({
        type: PRODUCTS_GET_PRODUCT,
        payload: product.data
    } ));
}

// export const addProduct = () => dispatch => {
//     axios.post(API_ADDRESS + MICRO_PRODUCTS + `/addImage`)
//     .catch(error => console.log(error.status))
//     .then(res => res)
//     .then(product => dispatch({
//         type: PRODUCTS_ADD_PRODUCT,
//         payload: product.data
//     }, console.log("product posting: hithithithititithit", product.data)));
// } 
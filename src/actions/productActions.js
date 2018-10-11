//implement admin calls to api
import {API_ADDRESS, MICRO_PRODUCTS} from '../constants/constants';
import {PRODUCTS_GET_ALL, PRODUCTS_GET_PRODUCT, PRODUCTS_ADD_PRODUCT, PRODUCTS_DELETE_PRODUCT, PRODUCTS_DELETE_PRODUCT_FAILED, PRODUCTS_DELETE_PRODUCT_SUCCESS} from '../actions/types';
import axios from 'axios';

export function createProduct(props, images, callback) {
    
    const req = axios.post(API_ADDRESS + MICRO_PRODUCTS + `/addImage`, props, images)
        .then(() => callback());
        console.log(req);
        return{
            // console.log(values)
            type: PRODUCTS_ADD_PRODUCT,
            payload: req
        }
}

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
    console.log("get product info");
    axios.get(API_ADDRESS + MICRO_PRODUCTS + `/getByProductId/${id}`)
    .catch(error => console.log(error.status))
    .then(res => res)
    .then(product => dispatch({
        type: PRODUCTS_GET_PRODUCT,
        payload: product.data
    } ));
}

export const deleteProduct = (id) => dispatch => {
    //console.log("get product info");
    axios.get(API_ADDRESS + MICRO_PRODUCTS + `/delete/${id}`)
    .catch(error => dispatch({
        type: PRODUCTS_DELETE_PRODUCT_FAILED,
        payload: error.data
    } ))
    .then(res => res)
    .then(product => dispatch({
        type: PRODUCTS_DELETE_PRODUCT_SUCCESS,
        payload: product.data
    } ));
}

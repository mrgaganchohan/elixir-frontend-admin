//implement admin calls to api
import {API_ADDRESS, MICRO_PRODUCTS} from '../constants/constants';
import {PRODUCTS_GET_ALL, PRODUCTS_GET_PRODUCT} from '../actions/types';
import axios from 'axios';

export const getAllProducts = () => dispatch => {
    console.log("get product info");
    axios.get(API_ADDRESS + MICRO_PRODUCTS + '/displayProducts')
    .catch(error => console.log(error.status))
    .then(res => res)
    .then(products => dispatch({
        type: PRODUCTS_GET_ALL,
        payload: products.data
    }), console.log("hitting products method action"));
}
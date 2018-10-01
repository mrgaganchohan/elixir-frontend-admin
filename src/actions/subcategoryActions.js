//implement subcategory api calls
import {API_ADDRESS, MICRO_SUBCATEGORY} from '../constants/constants';
import {SUBCATEGORY_GET_ALL, SUBCATEGORY_GET_SUBCATEGORY} from '../actions/types';
import axios from 'axios';

export const getAllSubCategories = () => dispatch => {
    console.log("attempting to get all subcategories");
    axios.get(API_ADDRESS + MICRO_SUBCATEGORY + '/all')
    .catch(error => console.log(error.status))
    .then(subcategory => dispatch({
        type: SUBCATEGORY_GET_ALL,
        payload: subcategory.data
    }, console.log("HITTING SUBCATEGORIESSSS",subcategory.data)));
}

export const getSubCategory = (subcategory) => dispatch => {
    console.log("get subcategory info");
    axios.get(API_ADDRESS + MICRO_SUBCATEGORY + `/${subcategory}`)
    .catch(error => console.log(error.status))
    .then(subcategoryData => dispatch({
        type: SUBCATEGORY_GET_SUBCATEGORY,
        payload: subcategoryData.data
    }));
}
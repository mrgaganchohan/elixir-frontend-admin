//implement subcategory api calls
import {API_ADDRESS, MICRO_CATEGORY} from '../constants/constants';
import {SUBCATEGORY_GET_ALL, SUBCATEGORY_GET_SUBCATEGORY} from '../actions/types';
import axios from 'axios';

export const getAllSubCategories = (category) => dispatch => {
    console.log("attempting to get all subcategories");
    axios.get(API_ADDRESS + MICRO_CATEGORY + `/name/${category}`)
  
    .catch(error => console.log(error.status))
    .then(subcategoryData => dispatch({
        
        type: SUBCATEGORY_GET_ALL,
        payload: subcategoryData.data
    }, console.log("HITTING SUBCATEGORIESSSS",subcategoryData)));
}

export const getSubCategory = (subcategory) => dispatch => {
    console.log("get subcategory info");
    axios.get(API_ADDRESS + MICRO_CATEGORY + `/${subcategory}`)
    .catch(error => console.log(error.status))
    .then(subcategoryData => dispatch({
        type: SUBCATEGORY_GET_SUBCATEGORY,
        payload: subcategoryData.data
    }));
}
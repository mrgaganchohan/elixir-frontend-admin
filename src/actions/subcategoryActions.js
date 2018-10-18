//implement subcategory api calls
import {API_ADDRESS, MICRO_SUB_CATEGORY} from '../constants/constants';
import {SUBCATEGORY_GET_ALL, SUBCATEGORY_GET_SUBCATEGORY, SUBCATEGORY_GET_BY_CATEGORY} from '../actions/types';
import axios from 'axios';

export const getAllSubCategories = () => dispatch => {
   // console.log("attempting to get all subcategories");
    axios.get(API_ADDRESS + MICRO_SUB_CATEGORY + `/all`)
    .catch(error => console.log(error.status))
    .then(subcategoryData => dispatch({
        type: SUBCATEGORY_GET_ALL,
        payload: subcategoryData.data
    }, console.log("HITTING SUBCATEGORIESSSS",subcategoryData)));
}

export const getSubCategory = (subcategory) => dispatch => {
    console.log('get sub being called')
    //console.log("get subcategory info");
    axios.get(API_ADDRESS + MICRO_SUB_CATEGORY + `/cat/name/${subcategory}`)
    .catch(error => console.log(error.status))
    .then(subcategoryData => { console.log(subcategoryData)
        dispatch({
            type: SUBCATEGORY_GET_SUBCATEGORY,
            payload: subcategoryData.data
        })
    });
}

export const getSubCategoriesByCategory = (subcategory) => dispatch => {
    axios.get(API_ADDRESS + MICRO_SUB_CATEGORY + `/${subcategory}`)
    .then(subcategoryData => { console.log(subcategoryData)
        dispatch({
            type: SUBCATEGORY_GET_BY_CATEGORY,
            payload: subcategoryData.data
        })
    })
    .catch(error => console.log(error.status))
}
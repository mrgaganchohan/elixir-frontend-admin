//implement calls to category api
import {API_ADDRESS, MICRO_CATEGORY} from '../constants/constants';
import {CATEGORY_GET_ALL, CATEGORY_GET_CATEGORY} from '../actions/types';
import axios from 'axios';

export const getAllCategories = () => dispatch => {
    console.log("attempting to get all categories");
    axios.get(API_ADDRESS + MICRO_CATEGORY + '/all')
    .catch(error => console.log(error.status))
    .then(category => dispatch({
        type: CATEGORY_GET_ALL,
        payload: category.data
    }, console.log("HITTING HERE WOWOWOWOWOWOWOW",category.data)));
}

export const getCategory = (category) => dispatch => {
    //console.log("get category info");
    axios.get(API_ADDRESS + MICRO_CATEGORY + `/${category}`)
    .catch(error => console.log(error.status))
    .then(categoryData => dispatch({
        type: CATEGORY_GET_CATEGORY,
        payload: categoryData.data
    }));
}
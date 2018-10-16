//implement calls to category api
import {API_ADDRESS, MICRO_CATEGORY} from '../constants/constants';
import {CATEGORY_GET_ALL, 
        CATEGORY_GET_CATEGORY, 
        CATEGORY_UPDATE_CATEGORY, 
        CATEGORY_ADD_CATEGORY,
         CATEGORY_DELETE_CATEGORY} from '../actions/types';
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

export const updateCategory = (catName, category) => dispatch => {
    console.log("update category info");
    axios.put(API_ADDRESS + MICRO_CATEGORY + `/update/${catName}`, category)
    .catch(error => console.log(error.status))
    .then(categoryData => dispatch({
        type: CATEGORY_UPDATE_CATEGORY,
        payload: categoryData
    },  console.log("category data logging.....", categoryData)));
}

export const addCategory = (categoryData) => dispatch => {
    //implement get category action 
    axios.post(API_ADDRESS + MICRO_CATEGORY + '/add', categoryData)
    .catch(error => console.log(error))
    .then(res => dispatch({
        type: CATEGORY_ADD_CATEGORY,
        payload: res
    }))
}

export const deleteCategory = (id) => dispatch => {
    axios.delete(API_ADDRESS + MICRO_CATEGORY + `/delete/${id}`)
    .catch(error => console.log(error))
    .then(res => dispatch({
        type: CATEGORY_DELETE_CATEGORY,
        payload: res
    }))
}

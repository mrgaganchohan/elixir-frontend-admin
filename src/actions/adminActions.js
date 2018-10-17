//implement admin calls to api
import {API_ADDRESS, MICRO_ADMIN} from '../constants/constants';
import {ADMIN_GET_DATA, ADMIN_UPDATE_INFO, ADMIN_FAILED_AUTH, ADMIN_LOGOUT, ADMIN_AUTHENTICATED} from '../actions/types';
import axios from 'axios';

export const getAdminInfo = (email) => dispatch => {
    //console.log("get admin info");
    axios.get(API_ADDRESS + MICRO_ADMIN + `/${email}`)
    
    .then(res => res)
    .then(adminData => {
        if(adminData.status !== 200) {
            throw Error(adminData.status)
        }
        dispatch({
            type: ADMIN_GET_DATA,
            payload: adminData.data
        }, console.log("response of admin data", adminData))
    })
    .catch(error => dispatch({
        type: ADMIN_FAILED_AUTH
    }));
}

//implement update admin information (to be used in settings page)
export const updateAdminInfo = (email, adminData) => dispatch => {
    //console.log("get admin info");
    //console.log("admin data action : ", adminData)
    axios.put(API_ADDRESS + MICRO_ADMIN + `/update/${email}`, adminData)
    .then(res => res)
    .then(updatedData => dispatch({
        type: ADMIN_UPDATE_INFO,
        payload: updatedData.data
    }));
}

export const authenticateUser = () => dispatch => {
    dispatch({
        type: ADMIN_AUTHENTICATED,
        payload: true
    })
}

export const logoutUser = () => dispatch => {
    dispatch({
        type: ADMIN_LOGOUT,
        payload: false
    })
}
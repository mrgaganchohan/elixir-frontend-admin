//implement admin calls to api
import {API_ADDRESS, MICRO_ADMIN} from '../constants/constants';
import {ADMIN_GET_DATA, ADMIN_UPDATE_INFO} from '../actions/types';
import axios from 'axios';

export const getAdminInfo = (email) => dispatch => {
    //console.log("get admin info");
    axios.get(API_ADDRESS + MICRO_ADMIN + `/${email}`)
    .catch(error => console.log(error.status))
    .then(res => res)
    .then(adminData => dispatch({
        type: ADMIN_GET_DATA,
        payload: adminData.data
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
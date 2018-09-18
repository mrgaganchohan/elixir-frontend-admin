import {ADMIN_GET_DATA, ADMIN_UPDATE_INFO} from '../actions/types';

const initialState = {
    adminDetails: {},
    isAuthenticated: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADMIN_GET_DATA:
            console.log("ADMIN DATA BEING HIT REDUCER");
            return {
                ...state,
                adminDetails: action.payload,
                isAuthenticated: true
            }
        case ADMIN_UPDATE_INFO:
            console.log("update admin user information");
            console.log(action.payload);
            return {
                ...state,
                adminDetails: action.payload
            }
        default:
            return "";
    }
}
import {ADMIN_GET_DATA, ADMIN_UPDATE_INFO, ADMIN_FAILED_AUTH, ADMIN_LOGOUT, ADMIN_AUTHENTICATED} from '../actions/types';

const initialState = {
    adminDetails: {},
    isAuthenticated: false,
    authError: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADMIN_GET_DATA:
            console.log("ADMIN DATA BEING HIT REDUCER");
            return {
                ...state,
                adminDetails: action.payload,
                authError: false
            }
        case ADMIN_FAILED_AUTH:
            console.log("hitting failed auth")
            return {
                ...state,
                adminDetails: {},
                authError: true
            }
        case ADMIN_UPDATE_INFO:
            console.log("update admin user information");
            console.log(action.payload);
            return {
                ...state,
                adminDetails: action.payload
            }
        case ADMIN_AUTHENTICATED:
            console.log("update admin user information");
            console.log(action.payload);
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case ADMIN_LOGOUT:
            return {
                ...state,
                isAuthenticated: action.payload,
                authError: null,
                adminDetails: {}
            }
        default:
            return state;
    }
}
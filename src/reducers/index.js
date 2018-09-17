import { combineReducers } from 'redux';
import adminReducer from './adminReducer';


const allReducers = combineReducers({
    adminData: adminReducer
})

export default allReducers;
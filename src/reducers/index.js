import { combineReducers } from 'redux';
import adminReducer from './adminReducer';


const allReducers = combineReducers({
    adminInfo: adminReducer
})

export default allReducers;
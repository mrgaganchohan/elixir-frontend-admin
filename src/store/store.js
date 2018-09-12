import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/index';

const initialState = {};

const store = createStore(allReducers, initialState, applyMiddleware(thunk));

export default store;
import { createStore } from 'redux';
import combineReducer from './combineReducer';
let store = createStore(combineReducer);

export default store;
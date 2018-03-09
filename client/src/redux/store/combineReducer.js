import redux from 'redux';
import {combineReducers} from 'redux';
import FirstReducer from '../reducer/firstReducer';
import SecondReducer from '../reducer/firstReducer'

export default combineReducers({
    FirstReducer,
    SecondReducer
})
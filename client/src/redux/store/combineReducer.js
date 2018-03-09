import redux from 'redux';
import {combineReducers} from 'redux';
import FirstReducer from '../reducer/firstReducer';
import SecondReducer from '../reducer/firstReducer'
import country from '../reducer/country'

export default combineReducers({
    FirstReducer,
    SecondReducer,
    country
})
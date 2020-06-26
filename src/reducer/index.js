import loggedReducer from './isLogged';
import first from './firsName';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged : loggedReducer,
    FirstName : first
});

export default allReducers;
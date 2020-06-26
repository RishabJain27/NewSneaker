import loggedReducer from './isLogged';
import first from './firsName';
import emailReducer from './email';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged : loggedReducer,
    FirstName : first,
    Email : emailReducer
});

export default allReducers;
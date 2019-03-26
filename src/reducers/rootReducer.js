import { combineReducers } from 'redux';
import insertUserReducer from '../reducers/insertUserReducer'

const rootReducer = combineReducers({
    insertUser: insertUserReducer
});

export default rootReducer;
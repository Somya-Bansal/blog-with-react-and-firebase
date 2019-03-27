import { combineReducers } from 'redux';
import setCurrentUser from '../reducers/setCurrentUserReducer'

const rootReducer = combineReducers({
    setCurrentUser: setCurrentUser
});

export default rootReducer;
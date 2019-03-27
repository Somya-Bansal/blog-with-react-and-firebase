import { combineReducers } from 'redux';
import setCurrentUser from '../reducers/setCurrentUserReducer'

const rootReducer = combineReducers({
    currentUser: setCurrentUser
});

export default rootReducer;
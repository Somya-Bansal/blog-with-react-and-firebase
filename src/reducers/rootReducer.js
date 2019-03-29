import { combineReducers } from 'redux';
import setCurrentUserReducer from '../reducers/setCurrentUserReducer'
import blogPostReducer from '../reducers/blogPostReducer'

const rootReducer = combineReducers({
    currentUser: setCurrentUserReducer,
    blogPosts: blogPostReducer 
});

export default rootReducer;
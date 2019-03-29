import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function blogPost (state = initialState.blogPosts, action) {
    switch(action.type){
        case actionTypes.CREATE_NEW_POST:
            return [
                ...state,
                Object.assign({}, action.post)
            ];
        default:
            return state;
    }
}
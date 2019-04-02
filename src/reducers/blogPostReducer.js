import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function blogPost (state = initialState.blogPosts, action) {
    switch(action.type){
        case actionTypes.FETCH_POST_FULFILLED:
            return action.payload;
        default:
            return state;
    }
}
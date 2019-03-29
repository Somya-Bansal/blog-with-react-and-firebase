import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function setCurrentUser (state = initialState.currentUser, action) {
    switch (action.type){
        case actionTypes.SET_CURRENT_USER:
            return action.user
        default:
            return state;
    }
}
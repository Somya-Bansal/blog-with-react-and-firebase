import * as actionTypes from '../actions/actionTypes';

export default function setCurrentUser (state = {}, action) {
    switch (action.type){
        case actionTypes.SET_CURRENT_USER:
            return state.currentUser = action.user;
        default:
            return state;
    }
}
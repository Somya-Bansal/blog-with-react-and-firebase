import * as actionTypes from '../actions/actionTypes';

export default function setCurrentUser (state = {}, action) {
    switch (action.type){
        case actionTypes.SET_CURRENT_USER:
            console.log(action.user);
            return action.user;
        default:
            return state;
    }
}
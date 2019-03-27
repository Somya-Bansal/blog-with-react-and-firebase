import * as actionTypes from './actionTypes';
import firebase from "../config/firebase"

const writeUserData = (userId, userName, userEmail, userImg) => {
    const userRef = firebase.database().ref('users/' + userId);
    userRef.set({
        username: userName,
        email: userEmail,
        profilePicture: userImg
    })
}
const setCurrentUserAction = (user) => {
    if(user) {
        writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    }
    return {
        type: actionTypes.SET_CURRENT_USER,
        user: user
    }
}
export default setCurrentUserAction;
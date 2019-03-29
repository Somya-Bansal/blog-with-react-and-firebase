import * as actionTypes from  './actionTypes';
import firebase from '../config/firebase';

const pushNewPost = (post) => {
    const postsRef = firebase.database().ref('posts');
    postsRef.push(post);
}

export const createNewBlogPost = (post) => {
    pushNewPost(post);
    return{
        type: actionTypes.CREATE_NEW_POST,
        post: post
    }
}

// export default blogPostActions
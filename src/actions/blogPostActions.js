import * as actionTypes from './actionTypes';
import firebase from '../config/firebase';

const postsRef = firebase.database().ref('posts');

const pushNewPost = (post) => {
    postsRef.push(post);
}

const fetchPostsRequestedAction = () => {
    return {
        type: actionTypes.FETCH_POSTS_REQUESTED
    }
}
const fetchPostsFulfilledAction = (newblogPosts) => {
    return {
        type: actionTypes.FETCH_POST_FULFILLED,
        payload: newblogPosts
    }
 }
const fetchPostsRejectedAction = () => {
    return {
        type: actionTypes.FETCH_POST_REJECTED
    }
}


export const createNewBlogPost = (post) => {
    pushNewPost(post);
    return {
        type: actionTypes.CREATE_NEW_POST
    }
}

export const fetchBlogPosts = () => {
    return dispatch => {
        dispatch(fetchPostsRequestedAction());
        return postsRef.on("value", (snapshot) => {
            let posts = snapshot.val();
            let newblogPosts = [];
            for (let post in posts) {
                newblogPosts.push({
                    id: post,
                    title: posts[post].title,
                    body: posts[post].body,
                    authorName: posts[post].authorName,
                    authorImg: posts[post].authorImg,
                    publishDate: posts[post].publishDate,
                });
            }
            dispatch(fetchPostsFulfilledAction(newblogPosts))
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            dispatch(fetchPostsRejectedAction())
        });
    }
}

// export default blogPostActions
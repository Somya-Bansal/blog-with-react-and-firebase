import * as actionTypes from './actionTypes';
import firebase from '../config/firebase';

const postsRef = firebase.database().ref('posts');

const pushNewPost = (post) => {
    postsRef.push(post);
}

export const createNewBlogPost = (post) => {
    pushNewPost(post);
    return {
        type: actionTypes.CREATE_NEW_POST
    }
}

export const fetchBlogPosts = () => {
    postsRef.on("value", (snapshot) => {
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
        return {
            type: actionTypes.FETCH_BLOG_POSTS,
            payload: newblogPosts
        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}

// export default blogPostActions
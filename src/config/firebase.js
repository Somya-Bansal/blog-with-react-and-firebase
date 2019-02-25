import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDHOUJgh3cxK3ial6yzo78dAIKcMBZj_54",
    authDomain: "personal-blog-e8156.firebaseapp.com",
    databaseURL: "https://personal-blog-e8156.firebaseio.com",
    projectId: "personal-blog-e8156",
    storageBucket: "personal-blog-e8156.appspot.com",
    messagingSenderId: "852628202906"
  };

const Firebase = firebase.initializeApp(config);

export default Firebase;
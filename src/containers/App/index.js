import React, { Component } from "react"
import * as firebase from "firebase";
import firebaseConfig from "./firebase-config"

// import React from "react"

// import Layout from "../components/layout"
// import AuthorInfo from "../components/authorInfo"
// import BlogCardContainer from "../components/blogCardContainer"

// import firebase from "firebase"

class App extends Component {
    constructor (){
        super();
        firebase.initializeApp(firebaseConfig);
    }
    componentWillMount(){
        let postRef = firebase.database().ref('posts') 
        let _this = this;
        postRef.on('value', function(snapshot) {
        console.log(snapshot.val());
        _this.setState({
            posts: snapshot.val(),
            loading: false
            });
            });

    }
    render () {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}
export default App;

// {/* <Layout>
//     <AuthorInfo></AuthorInfo>
//     <BlogCardContainer></BlogCardContainer>
// </Layout> */}
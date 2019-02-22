import React, { Component } from "react"
import * as firebase from "firebase";
import firebaseConfig from "./firebase-config"


import "./globalStyles.scss"
import Layout from "../../components/Layout/layout"
import AuthorInfo from "../../components/AuthorInfo/authorInfo"
import BlogCardContainer from "../../containers/BlogCardContainer/blogCardContainer"

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
            <Layout>
                <AuthorInfo></AuthorInfo>
                <BlogCardContainer></BlogCardContainer>
            </Layout>
        );
    }
}
export default App;

// {/* <Layout>
//     <AuthorInfo></AuthorInfo>
//     <BlogCardContainer></BlogCardContainer>
// </Layout> */}
import React, { Component } from "react"
import * as firebase from "firebase";
import firebaseConfig from "../../config/firebase-config"


import "./globalStyles.scss"
import Layout from "../../components/Layout/layout"
import AuthorInfo from "../../components/AuthorInfo/authorInfo"
import BlogCardContainer from "../../containers/BlogCardContainer/blogCardContainer"
import Form from "../../components/Form/form"

class App extends Component {
    constructor (){
        super();
        firebase.initializeApp(firebaseConfig);
    }
    componentWillMount(){
        let postRef = firebase.database().ref('posts') 

        const userRef = firebase.database().ref('users');
        const item = {
            username: "sobansal",
            email: "sobansal@domain.com",
          }
        userRef.push(item);
        
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
                <Form></Form>
                <BlogCardContainer></BlogCardContainer>
            </Layout>
        );
    }
}
export default App;
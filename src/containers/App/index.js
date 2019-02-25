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
    render () {
        return (
            <Layout>
                <AuthorInfo></AuthorInfo>
                <Form db={firebase}></Form>
                <BlogCardContainer db={firebase}></BlogCardContainer>
            </Layout>
        );
    }
}
export default App;
import React, { Component } from "react"
import firebase from "../../config/firebase";


import "./globalStyles.scss"
import Layout from "../../components/Layout/layout"
import AuthorInfo from "../../components/AuthorInfo/authorInfo"
import BlogCardContainer from "../../containers/BlogCardContainer/blogCardContainer"
import Form from "../../components/Form/form"

class App extends Component {
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
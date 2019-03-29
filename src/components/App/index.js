import React, { Component } from "react"
import firebase, { auth, provider } from "../../config/firebase"

import "./globalStyles.scss"
import Layout from "../../components/Layout/layout"
import LoggedinUserInfo from "../../components/LoggedinUserInfo/loggedinUserInfo"
import BlogCardContainer from "../../components/BlogCardContainer/blogCardContainer"
import Form from "../../components/Form/form"
import NeedLogin from "../../components/NeedLogin/needLogin"
import Loader from "../../components/Loader/loader"
import { connect } from "react-redux";
import setCurrentUserAction from '../../actions/setCurrentUserAction'

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({
                isLoaded: true
            })
            // console.log("FROM component did mount before action call");
            // console.log(this.props.currentUser);
            this.props.setCurrentUser(user);
            // console.log("After action call");
            // console.log(this.props.currentUser);

        });
    }
    login() {
        auth.signInWithPopup(provider);
    }
    logout() {
        auth.signOut();
    }
    render() {
        // console.log("FROM RENDER")
        return (
            <Layout>
                {this.state.isLoaded ?
                    (this.props.currentUser ?
                        <>
                            <LoggedinUserInfo logoutHandle={this.logout} user={this.props.currentUser}></LoggedinUserInfo>
                            <Form></Form>
                            <BlogCardContainer db={firebase} loggedInUser={this.props.currentUser}></BlogCardContainer>
                        </>
                        :
                            <NeedLogin loginHandle={this.login}></NeedLogin>
                    )
                    :
                    <Loader></Loader>
                }
            </Layout>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => {
            dispatch(setCurrentUserAction(user))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
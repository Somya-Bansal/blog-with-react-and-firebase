import React, { Component } from "react"
import firebase, { auth, provider } from "../../config/firebase"

import "./globalStyles.scss"
import Layout from "../../components/Layout/layout"
import AuthorInfo from "../../components/AuthorInfo/authorInfo"
import BlogCardContainer from "../../containers/BlogCardContainer/blogCardContainer"
import Form from "../../components/Form/form"
import NeedLogin from "../../components/NeedLogin/needLogin"
import Loader from "../../components/Loader/loader" 

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
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
          if (user) {
            this.writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            this.setState({user});
          } 
        });
    }
    writeUserData = (userId, userName, userEmail, userImg ) => {
        const userRef = firebase.database().ref('users/' + userId);
        userRef.set({
            username: userName,
            email: userEmail,
            profilePicture: userImg
        })
    }
    login() {
        auth.signInWithPopup(provider) 
      }
      logout() {
        auth.signOut()
        .then(() => {
          this.setState({
            user: null
          });
        });
      }
    render () {
        return (
            <Layout>
                {this.state.isLoaded ?
                    (this.state.user ?
                        <>
                            <AuthorInfo logoutHandle={this.logout} user={this.state.user}></AuthorInfo>
                            <Form db={firebase} user={this.state.user}></Form>
                        </>
                    :
                        <NeedLogin loginHandle={this.login}></NeedLogin>
                    )
                :
                    <Loader></Loader>
                }
                <BlogCardContainer db={firebase}></BlogCardContainer>
            </Layout>
        );
    }
}
export default App;
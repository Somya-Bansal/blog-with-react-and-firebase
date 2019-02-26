import React, { Component } from "react"
import firebase, { auth, provider } from "../../config/firebase";


import "./globalStyles.scss"
import Layout from "../../components/Layout/layout"
import AuthorInfo from "../../components/AuthorInfo/authorInfo"
import BlogCardContainer from "../../containers/BlogCardContainer/blogCardContainer"
import Form from "../../components/Form/form"
import NeedLogin from "../../components/NeedLogin/needLogin"
// import Button from "../../components/Button/button"

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    login() {
        auth.signInWithPopup(provider) 
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
          });
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
                {/* {this.state.user ?
                    <Button onClickHandle={this.logout}>Logout</Button>
                    :
                    <Button onClickHandle={this.login}>Login</Button>
                } */}
                {this.state.user ?
                    <>
                        <AuthorInfo logoutHandle={this.logout}></AuthorInfo>
                        <Form db={firebase}></Form>
                    </>
                    :
                    <NeedLogin loginHandle={this.login}></NeedLogin>
                }
                <BlogCardContainer db={firebase}></BlogCardContainer>
            </Layout>
        );
    }
}
export default App;
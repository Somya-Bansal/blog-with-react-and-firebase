import React from "react"
import { auth } from "../../config/firebase"

import Layout from "../../components/Layout/layout"
import BlogPost from "../../containers/BlogPost/blogPost"
// import Sidebar from "../components/sidebar"
import styles from "./blogPostPage.module.scss"

class BlogPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: ''
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            let userEmail = user.email;
            this.setState({
                loggedInUser: userEmail
            })
            console.log("LoggedInUser : " + userEmail);

        });
    }
    render () {
        return (
            <Layout>
                <div className={styles.blogPostPage}>
                    <h1>
                        {this.state.loggenInUser}
                    </h1>
                    <BlogPost postState={this.props.location.state} loggedInUser={this.state.loggenInUser}></BlogPost>
                    {/* <Sidebar></Sidebar> */}
                </div>
            </Layout>
        );
    }
}
export default BlogPostPage;
import React from "react"
import { auth } from "../../config/firebase"

import Layout from "../../components/Layout/layout"
import BlogPost from "../../components/BlogPost/blogPost"
// import Sidebar from "../components/sidebar"
import styles from "./blogPostPage.module.scss"
import Loader from "../../components/Loader/loader"

class BlogPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loggedInUser: {}
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            let userEmail = user.email;
            let username = user.displayName;
            let userImageURL = user.photoURL;
            this.setState({
                loading: false,
                loggedInUser: {
                    userEmail: userEmail,
                    username: username,
                    userImageURL: userImageURL
                }
            })
        });
    }
    render () {
        if(this.state.loading) {
            return <Loader></Loader>
        }
        else {
            return (
                <Layout>
                    <div className={styles.blogPostPage}>
                        <BlogPost postState={this.props.location.state}></BlogPost>
                        {/* <Sidebar></Sidebar> */}
                    </div>
                </Layout>
            );
        }
    }
}
export default BlogPostPage;
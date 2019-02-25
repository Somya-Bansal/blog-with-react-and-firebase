import React from "react"

import Layout from "../../components/Layout/layout"
import BlogPost from "../../containers/BlogPost/blogPost"
// import Sidebar from "../components/sidebar"
import styles from "./blogPostPage.module.scss"

class BlogPostPage extends React.Component {
    render () {
        return (
            <Layout>
                <div className={styles.blogPostPage}>
                    {/* {this.props.location.state.title} */}
                    {/* <BlogPost postState={this.props.location.state}> */}
                    <BlogPost></BlogPost>
                    {/* <Sidebar></Sidebar> */}
                </div>
            </Layout>
        );
    }
}
export default BlogPostPage;
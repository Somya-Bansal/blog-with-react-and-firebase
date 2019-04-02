import React from "react"
import Layout from "../../components/Layout/layout"
import BlogPost from "../../components/BlogPost/blogPost"
// import Sidebar from "../components/sidebar"
import styles from "./blogPostPage.module.scss"

class BlogPostPage extends React.Component {
    render () {
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
export default BlogPostPage;
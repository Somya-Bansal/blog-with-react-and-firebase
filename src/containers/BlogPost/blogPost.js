import React from "react"

import CommentsContainer from "../CommentsContainer/commentsContainer"
import BlogPostContent from "../../components/BlogPostContent/blogPostContent"
import styles from "./blogPost.module.scss"

class BlogPost extends React.Component {
    render () {
        return (
            <div className={styles.leftContainer}>
                <BlogPostContent postState={this.props.postState}></BlogPostContent>
                <CommentsContainer postState={this.props.postState}></CommentsContainer>
            </div>
        );
    }
}
export default BlogPost;
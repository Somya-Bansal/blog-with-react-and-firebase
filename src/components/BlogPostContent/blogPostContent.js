import React from "react"

import styles from "./blogPostContent.module.scss"
import blogPic from "../../images/blog1.jpg"

class BlogPostContent extends React.Component {
    render() {
        return (
            <div className={styles.postContainer}>
                <h1 className={styles.postHeading}>
                    {this.props.postState.title}
                    </h1>
                <div className={styles.postMeta}>
                    <div className={styles.author}>
                        <span>by </span>
                        <span className={styles.authorName}>
                            {this.props.postState.authorName}
                        </span>
                    </div>
                    <div className={styles.date}>
                        {this.props.postState.publishDate}
                    </div>
                    <div className={styles.comments}>
                        0 comments
                    </div>
                    <div className={styles.upvotes}>
                        {this.props.postState.upvotes} upvotes
                    </div>
                    <div className={styles.downvotes}>
                        {this.props.postState.downvotes} downvotes
                    </div>
                </div>
                <div className={styles.blogPostImageContainer}>
                    <img className={styles.blogPostImage} alt="" src={blogPic}></img>
                </div>
                <div className={styles.blogPostContent}>
                    {this.props.postState.body}
                </div>
            </div>
        );
    }
}
export default BlogPostContent;
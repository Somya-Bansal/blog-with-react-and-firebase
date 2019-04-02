import React from "react"
import styles from "./blogPostContent.module.scss"
import blogPic from "../../images/blog1.jpg"
import { connect } from 'react-redux';

class BlogPostContent extends React.Component {
    render() {
        const postId = this.props.postState.id;
        let currentPost = this.props.blogPosts.find(blogPost => blogPost.id === postId);

        return (
            <div className={styles.postContainer}>
                <h1 className={styles.postHeading}>
                    {currentPost.title}
                </h1>
                <div className={styles.postMeta}>
                    <div className={styles.author}>
                        <span>by </span>
                        <span className={styles.authorName}>
                            {currentPost.authorName}
                        </span>
                    </div>
                    <div className={styles.date}>
                        {currentPost.publishDate}
                    </div>
                    <div className={styles.comments}>
                        {currentPost.commentCount} comments
                    </div>
                    <div className={styles.upvotes}>
                        {currentPost.upvotes} upvotes
                    </div>
                    <div className={styles.downvotes}>
                        {currentPost.downvotes} downvotes
                    </div>
                </div>
                <div className={styles.blogPostImageContainer}>
                    <img className={styles.blogPostImage} alt="" src={blogPic}></img>
                </div>
                <div className={styles.blogPostContent}>
                    {currentPost.body}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        blogPosts: state.blogPosts
    }
}
export default connect(mapStateToProps)(BlogPostContent);
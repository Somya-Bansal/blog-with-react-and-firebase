import React from "react"
import firebase from "../../config/firebase"

import styles from "./blogPostContent.module.scss"
import blogPic from "../../images/blog1.jpg"

class BlogPostContent extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }
    componentDidMount() {
        this._isMounted = true;
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        postRef.on("value", (snapshot) => {
            let post = snapshot.val();
            if(this._isMounted) {
                this.setState({
                    post: post
                });
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          }
        );
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div className={styles.postContainer}>
                <h1 className={styles.postHeading}>
                    {this.state.post.title}
                    </h1>
                <div className={styles.postMeta}>
                    <div className={styles.author}>
                        <span>by </span>
                        <span className={styles.authorName}>
                            {this.state.post.authorName}
                        </span>
                    </div>
                    <div className={styles.date}>
                        {this.state.post.publishDate}
                    </div>
                    <div className={styles.comments}>
                        0 comments
                    </div>
                    <div className={styles.upvotes}>
                        {this.state.post.upvotes} upvotes
                    </div>
                    <div className={styles.downvotes}>
                        {this.state.post.downvotes} downvotes
                    </div>
                </div>
                <div className={styles.blogPostImageContainer}>
                    <img className={styles.blogPostImage} alt="" src={blogPic}></img>
                </div>
                <div className={styles.blogPostContent}>
                    {this.state.post.body}
                </div>
            </div>
        );
    }
}
export default BlogPostContent;
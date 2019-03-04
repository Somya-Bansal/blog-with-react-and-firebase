import React from 'react'
import firebase from '../../config/firebase'

import styles from './commentsContainer.module.scss'

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: 0,
            downvotes: 0
        }
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    }
    componentDidMount() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        postRef.on("value", (snapshot) => {
            let post = snapshot.val();
            this.setState({
                upvotes: post.upvotes,
                downvotes: post.downvotes
            });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          }
        );
    }
    handleUpvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        let newVote = this.state.upvotes + 1;
        postRef.update({
            upvotes: newVote
        })
        this.setState({
            upvotes: newVote
        })
    }
    handleDownvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        let newVote = this.state.downvotes + 1;
        postRef.update({
            downvotes: newVote
        })
        this.setState({
            downvotes: newVote
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <button onClick={this.handleUpvoteClick} className={styles.upvote}>
                    {this.state.upvotes} Upvotes
                </button>
                <button onClick={this.handleDownvoteClick} className={styles.downvote}>
                    {this.state.downvotes} Downvotes
                </button>
                <button className={styles.comment}>
                    Comments
                </button>
            </div>
        )
    }
}
export default CommentsContainer;
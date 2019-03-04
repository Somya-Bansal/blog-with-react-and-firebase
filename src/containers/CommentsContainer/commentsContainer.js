import React from 'react'
import firebase from '../../config/firebase'

import styles from './commentsContainer.module.scss'

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: this.props.postState.upvotes,
            downvotes: this.props.postState.downvotes
        }
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    }
    handleUpvoteClick() {
        const postId = this.props.postState.id;
        const newVote = this.state.upvotes + 1;
        const postRef = firebase.database().ref('posts/' + postId);
        postRef.update({
            upvotes: newVote
        })
        this.setState({
            upvotes: newVote
        })
    }
    handleDownvoteClick() {
        const newVote = this.state.downvotes + 1;
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
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
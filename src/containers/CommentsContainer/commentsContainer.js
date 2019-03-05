import React from 'react'
import firebase from '../../config/firebase'

import styles from './commentsContainer.module.scss'

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: 0,
            downvotes: 0,
            upvoted: false,
            downvoted: false
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
        if(!this.state.upvoted) {   
            let newVote = this.state.upvotes + 1;
            postRef.update({
                upvotes: newVote
            })
            this.setState({
                upvotes: newVote,
                upvoted: true
            })
        }
    }
    handleDownvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        if(!this.state.downvoted) {    
            let newVote = this.state.downvotes + 1;
            postRef.update({
                downvotes: newVote
            })
            this.setState({
                downvotes: newVote,
                downvoted:  true
            })
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <button 
                    onClick={this.handleUpvoteClick}
                    disabled={this.state.upvoted ? "disabled" : ""}
                    className={styles.upvote}>
                        {this.state.upvotes} Upvotes
                </button>
                <button
                    onClick={this.handleDownvoteClick}
                    disabled={this.state.downvoted ? "disabled" : ""}
                    className={styles.downvote}>
                        {this.state.downvotes} Downvotes
                </button>
                <button 
                    className={styles.comment}>
                    Comments
                </button>
            </div>
        )
    }
}
export default CommentsContainer;
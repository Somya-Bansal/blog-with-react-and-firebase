import React from 'react'
import firebase, { auth } from '../../config/firebase'

import styles from './commentsContainer.module.scss'

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            upvotes: 0,
            downvotes: 0,
            upvoted: false,
            downvoted: false
        }
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({
                userId: user.uid
            })
        });

        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        const upvoteRef = firebase.database().ref('posts/' + postId + '/upvotedBy');
        const downvoteRef = firebase.database().ref('posts/' + postId + '/downvotedBy');

        postRef.on("value", (snapshot) => {
            let post = snapshot.val();

            this.setState({
                upvotes: post.upvotes,
                downvotes: post.downvotes
            });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        upvoteRef.once("value", snap => {
            let arr = snap.val();
            for (let i in arr) {
                if (arr[i] === this.state.userId) {
                    this.setState({
                        upvoted: true
                    })
                }
            }
        })

        downvoteRef.once("value", snap => {
            let arr = snap.val();
            for (let i in arr) {
                if (arr[i] === this.state.userId) {
                    this.setState({
                        downvoted: true
                    })
                }
            }
        })
    }
    handleUpvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        const upvoteRef = firebase.database().ref('posts/' + postId + '/upvotedBy');

        if (!this.state.upvoted) {
            let newUpvoteCount = this.state.upvotes + 1;
            postRef.update({
                upvotes: newUpvoteCount
            })
            upvoteRef.push().set(this.state.userId);

            this.setState({
                upvotes: newUpvoteCount,
                upvoted: true
            })
        }
    }
    handleDownvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        const downvoteRef = firebase.database().ref('posts/' + postId + '/downvotedBy');

        if (!this.state.downvoted) {
            let newDownvoteCount = this.state.downvotes + 1;
            postRef.update({
                downvotes: newDownvoteCount
            })

            downvoteRef.push().set(this.state.userId);

            this.setState({
                downvotes: newDownvoteCount,
                downvoted: true
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
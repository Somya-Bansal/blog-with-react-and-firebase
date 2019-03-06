import React from 'react'
import firebase from '../../config/firebase'

import styles from './commentsContainer.module.scss'

class CommentsContainer extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.loggedInUser,
            upvotes: 0,
            downvotes: 0,
            upvoted: false,
            downvoted: false
        }
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    }
    componentDidMount() {
        console.log("Comments Container Mounted");
        this._isMounted = true;
        
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        const upvoteRef = firebase.database().ref('posts/' + postId + '/upvotedBy');
        const downvoteRef = firebase.database().ref('posts/' + postId + '/downvotedBy');
        
        postRef.on("value", (snapshot) => {
            let post = snapshot.val();
            if(this._isMounted){
                this.setState({
                    upvotes: post.upvotes,
                    downvotes: post.downvotes
                });
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        
        upvoteRef.on("value", snap => {
            console.log("checking for user already in db");
            let arr = snap.val();
            for (let i in arr) {
                console.log("inside the loop!");
                console.log("found the user?" + (arr[i] === this.state.userId));
                console.log("arr[i] : " + arr[i]);
                console.log("this.state.userId : " + this.state.userId);
                if ((arr[i] === this.state.userId) && this._isMounted) {
                    console.log("already upvoted!");
                    this.setState({
                        upvoted: true
                    })
                }
            }
        })
        
        downvoteRef.on("value", snap => {
            let arr = snap.val();
            for (let i in arr) {
                if ((arr[i] === this.state.userId) && this._isMounted) {
                    this.setState({
                        downvoted: true
                    })
                }
            }
        })
    }
    componentWillUnmount() {
        console.log("Comments Container Unmounted!");
        this._isMounted = false;
    }
    handleUpvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        const upvoteRef = firebase.database().ref('posts/' + postId + '/upvotedBy');

        console.log(!this.state.upvoted);
        if (!this.state.upvoted && this._isMounted) {
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

        if (!this.state.downvoted && this._isMounted) {
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
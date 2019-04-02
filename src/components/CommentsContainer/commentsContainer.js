import React from 'react'
import firebase from '../../config/firebase'
import { connect } from 'react-redux';
import styles from './commentsContainer.module.scss'
import CommentsBox from '../../components/CommentsBox/commentsBox'

class CommentsContainer extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            showCommentBox: false,
            userId: this.props.currentUser.email,
            upvotes: 0,
            downvotes: 0,
            upvoted: false,
            downvoted: false,
            commentCount: 0
        }
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
        this.showComments = this.showComments.bind(this);
    }
    componentDidMount() {
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
                    downvotes: post.downvotes,
                    commentCount: post.commentCount
                });
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        
        upvoteRef.on("value", snap => {
            let arr = snap.val();
            for (let i in arr) {
                if ((arr[i] === this.state.userId) && this._isMounted) {
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
        this._isMounted = false;
    }
    handleUpvoteClick() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        const upvoteRef = firebase.database().ref('posts/' + postId + '/upvotedBy');

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
            });
        }
    }
    showComments() {
        if(this._isMounted) {
            this.setState({
                showCommentBox: true
            });
        }
    }
    render() {
        return (
            <>
                <div className={styles.container}>
                    <button
                        onClick={this.handleUpvoteClick}
                        disabled={this.state.upvoted ? "disabled" : ""}
                        className={styles.upvote}
                        >
                            {this.state.upvotes} Upvotes
                    </button>
                    <button
                        onClick={this.handleDownvoteClick}
                        disabled={this.state.downvoted ? "disabled" : ""}
                        className={styles.downvote}
                        >
                            {this.state.downvotes} Downvotes
                    </button>
                    <button
                        className={styles.comment}
                        onClick={this.showComments}
                        >
                           {this.state.commentCount} Comments
                    </button>
                </div>
                {this.state.showCommentBox ? <CommentsBox postState={this.props.postState} commentCount={this.state.commentCount}/> : null}
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
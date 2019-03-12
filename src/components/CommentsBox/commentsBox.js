import React from "react"
import firebase from "../../config/firebase"

import styles from './commentsBox.module.scss'
import CommentCard from '../../components/CommentCard/commentCard'
import CommentForm from '../../components/CommentForm/commentForm'

class CommentsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);
        postRef.child("comments").on("value", (snapshot) => {
            let comments = snapshot.val();
            let newComments = [];
            for (let comment in comments) {
                newComments.push({
                    id: comment,
                    commentor: comments[comment].commentor,
                    commentTimeStamp: comments[comment].commentTimeStamp,
                    commentBody: comments[comment].commentBody,
                    commentorAvatar: comments[comment].commentorAvatar
                });
            }
                this.setState({
                    comments: newComments
                });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          }
        );
    }
    render() {
        return(
            <div className={styles.commentBox}>
                <h1>Comments(0)</h1>
                {this.state.comments.map((comment) => {
                    return(
                        <CommentCard key={comment.id} cardState={comment}></CommentCard>
                    )
                })}
                <CommentForm postState={this.props.postState} loggedInUser={this.props.loggedInUser}></CommentForm>
            </div>
        );
    }
}
export default CommentsBox;
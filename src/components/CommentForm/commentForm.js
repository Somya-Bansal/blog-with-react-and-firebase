import React from 'react'
import firebase from "../../config/firebase"


import styles from './commentForm.module.scss'
import Button from '../../components/Button/button'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentor: '',
            commentTimeStamp: '',
            commentBody: '',
            commentorAvatar: '',
            // commentCount: 0
        }
        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleChangeField(key, event){
        this.setState({
            [key]: event.target.value
        });
    }
    handleCommentSubmit = e => {
        e.preventDefault();
        let today = (new Date()).toDateString();

        const postId = this.props.postState.id;
        const postRef = firebase.database().ref('posts/' + postId);

        const comment = {
            commentor: this.props.loggedInUser.username,
            commentTimeStamp: today,
            commentBody: this.state.commentBody,
            commentorAvatar: this.props.loggedInUser.userImageURL
        }
        let updatedCommentCount = this.props.commentCount + 1;
        postRef.update({
            commentCount: updatedCommentCount
        })
        postRef.child("comments").push(comment);

        this.setState({
            commentor: '',
            commentTimeStamp: '',
            commentBody: '',
            commentorAvatar: ''
        })
    }
    render() {
        const commentBody = this.state.commentBody;
        return (
            <form onSubmit={this.handleCommentSubmit} className={styles.CommentForm}>
                <input
                    onChange={(ev) => this.handleChangeField('commentBody', ev)}
                    value={commentBody}
                    placeholder="Add a Comment"
                    className={styles.commentContent}
                ></input>
                <Button type="submit">Submit</Button>
            </form>
        )
    }
}
export default CommentForm
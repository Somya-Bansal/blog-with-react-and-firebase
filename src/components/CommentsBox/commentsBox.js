import React from "react"

import styles from './commentsBox.module.scss'
import CommentCard from '../../components/CommentCard/commentCard'
import CommentForm from '../../components/CommentForm/commentForm'

class CommentsBox extends React.Component {
    render() {
        return(
            <div className={styles.commentBox}>
                <h1>Comments(0)</h1>
                <p></p>
                <CommentCard postState={this.props.postState} loggedInUser={this.props.loggedInUser}></CommentCard>
                <CommentForm postState={this.props.postState} loggedInUser={this.props.loggedInUser}></CommentForm>
            </div>
        );
    }
}
export default CommentsBox;
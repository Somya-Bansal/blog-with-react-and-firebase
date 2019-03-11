import React from "react"

import styles from './commentsBox.module.scss'
import CommentCard from '../../components/commentCard/commentCard'

class CommentsBox extends React.Component {
    render() {
        return(
            <div className={styles.commentBox}>
                <h1>Comments(0)</h1>
                <p></p>
                <CommentCard></CommentCard>
            </div>
        );
    }
}
export default CommentsBox;
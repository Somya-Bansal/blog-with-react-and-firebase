import React from 'react'

import styles from './commentForm.module.scss'
import Button from '../../components/Button/button'

class CommentForm extends React.Component {
    render() {
        return (
            <div className={styles.CommentForm}>
                <input placeholder="Add a Comment" className={styles.commentContent}></input>
                <Button onClickHandle={this.hnadleCommentSubmit}>Submit</Button>
            </div>
        )
    }
}
export default CommentForm
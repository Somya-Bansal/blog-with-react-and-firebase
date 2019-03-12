import React from 'react'

import styles from './commentCard.module.scss'
class CommentCard extends React.Component {
    render() {
        return(
            <div className={styles.CommentCard}>
                <div className={styles.avatar}>
                    <img src={this.props.cardState.commentorAvatar} alt=""></img>
                </div>
                <div className={styles.commentInfo}>
                    <div className={styles.commentorInfo}>
                        <div className={styles.commentorName}>
                            {this.props.cardState.commentor}
                        </div>
                        <div className={styles.commentDate}>
                            {this.props.cardState.commentTimeStamp}
                        </div>
                    </div>
                    <div className={styles.commentBody}>
                        <p>
                            {this.props.cardState.commentBody}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentCard;
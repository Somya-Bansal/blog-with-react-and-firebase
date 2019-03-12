import React from 'react'

import styles from './commentCard.module.scss'
import blogPic from "../../images/blog1.jpg"

class CommentCard extends React.Component {
    render() {
        return(
            <div className={styles.CommentCard}>
                <div className={styles.avatar}>
                    <img src={blogPic} alt=""></img>
                </div>
                <div className={styles.commentInfo}>
                    <div className={styles.commentorInfo}>
                        <div className={styles.commentorName}>
                            Somya Bansal
                        </div>
                        <div className={styles.commentDate}>
                            12 Mar 2019
                        </div>
                    </div>
                    <div className={styles.commentBody}>
                        <p>
                            Comment content  which basically says that the blog post above is very amazing
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentCard;
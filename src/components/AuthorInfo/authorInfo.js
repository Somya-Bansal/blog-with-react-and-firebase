import React from "react"

import styles from "./authorInfo.module.scss"
import myPic from "../../images/my-pic.jpg"

class AuthorInfo extends React.Component {
    render () {
        return (
            <div className={styles.AuthorInfoContainer}>
                <div className={styles.authorInfo}>
                    <div className={styles.authorImage}>
                        <img src={myPic} alt=""></img>
                    </div>
                    <div className={styles.authorText}>
                        <h2 className={styles.authorTextTitle}>
                            Somya Bansal
                        </h2>
                        <p className={styles.authorTextDesc}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default AuthorInfo;
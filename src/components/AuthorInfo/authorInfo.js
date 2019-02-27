import React from "react"

import styles from "./authorInfo.module.scss"
import Button from "../../components/Button/button"


class AuthorInfo extends React.Component {
    render () {
        return (
            <div className={styles.AuthorInfoContainer}>
                <div className={styles.author}>
                    <div className={styles.authorInfo}>
                        <div className={styles.authorImage}>
                            <img src={this.props.user.photoURL} alt=""></img>
                        </div>
                        <h2 className={styles.authorTitle}>
                            {this.props.user.displayName}
                        </h2>
                    </div>
                    <Button onClickHandle={this.props.logoutHandle}>Logout</Button>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default AuthorInfo;
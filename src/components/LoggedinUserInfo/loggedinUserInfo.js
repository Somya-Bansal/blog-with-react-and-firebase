import React from "react"

import styles from "./loggedinUserInfo.module.scss"
import Button from "../../components/Button/button"


class LoggedinUserInfo extends React.Component {
    render () {
        return (
            <div className={styles.LoggedinUserInfoContainer}>
                <div className={styles.author}>
                    <div className={styles.LoggedinUserInfo}>
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
export default LoggedinUserInfo;
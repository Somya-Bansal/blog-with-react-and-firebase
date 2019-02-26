import React from "react"

import styles from "./authorInfo.module.scss"
import myPic from "../../images/my-pic.jpg"
import Button from "../../components/Button/button"


class AuthorInfo extends React.Component {
    render () {
        return (
            <div className={styles.AuthorInfoContainer}>
                <div className={styles.authorInfo}>
                    <div className={styles.authorImage}>
                        <img src={myPic} alt=""></img>
                    </div>
                    <h2 className={styles.authorTitle}>
                        Somya Bansal
                    </h2>
                    <Button onClickHandle={this.props.logoutHandle}>Logout</Button>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default AuthorInfo;
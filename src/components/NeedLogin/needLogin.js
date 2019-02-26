import React from "react"

import styles from "./needLogin.module.scss"
import Button from "../Button/button"

class NeedLogin extends  React.Component {
    render() {
        return (
            <div className={styles.container}>
                <p>
                    You need to LOGIN to be able to post a blog post!
                </p>
                <Button onClickHandle={this.props.loginHandle}>Login</Button>
            </div>
        )
    }
}
export default NeedLogin;
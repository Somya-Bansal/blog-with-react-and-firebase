import React from "react"

import styles from "./button.module.scss"

const Button = props => (
    <button onClick={props.onClickHandle} className={styles.button} type={props.type}>
        {props.children}
    </button>

)
export default Button;
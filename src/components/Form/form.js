import React, { Component } from "react"

import styles from "./form.module.scss"

class Form extends Component {
    render () {
        return(
            <div className={styles.articleInput}>
                <input className={styles.title} placeholder="Article Title"></input>
                <textarea className={styles.articleContent} placeholder="Content"></textarea>
                <input className={styles.authorName} placeholder="Author Name"></input>
                <input className={styles.authorEmail} placeholder="Author Email Id"></input>
                <button className={styles.articleSubmit}>Submit</button>
            </div>
        );
    }
}
export default Form;
import React, { Component } from "react"

import styles from "./form.module.scss"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            authorName: '',
            authorEmail: '',
            publishDate: ''
        }
        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeField(key, event){
        this.setState({
            [key]: event.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        let today = (new Date()).toDateString();

        const postsRef = this.props.db.database().ref('posts');
        const post = {
            title: this.state.title,
            body: this.state.body,
            authorName: this.state.authorName,
            authorEmail: this.state.authorEmail,
            publishDate: today
        }
        postsRef.push(post);

        this.setState({
            title: '',
            body: '',
            authorName: '',
            authorEmail: '',
            publishDate: ''
        });
    }
    render () {
        const {title, body, authorName, authorEmail} = this.state;
        return(
            <div className={styles.articleInput}>
                <h2>Add a blog Post!</h2>
                <input 
                    onChange={(ev) => this.handleChangeField('title', ev)}
                    value={title}
                    className={styles.title} 
                    placeholder="Article Title"
                ></input>
                <textarea
                    onChange={(ev) => this.handleChangeField('body', ev)}
                    value={body} 
                    className={styles.articleContent}
                    placeholder="Content"
                ></textarea>
                <input
                    onChange={(ev) => this.handleChangeField('authorName', ev)}
                    value={authorName} 
                    className={styles.authorName} 
                    placeholder="Author Name"
                ></input>
                <input
                    onChange={(ev) => this.handleChangeField('authorEmail', ev)}
                    value={authorEmail}
                    type="email"
                    className={styles.authorEmail}
                    placeholder="Author Email Id"
                ></input>
                <button onClick={this.handleSubmit} className={styles.articleSubmit}>Add Post</button>
            </div>
        );
    }
}
export default Form;
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
            authorImg: '',
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
        let today = (new Date()).toDateString();

        const postsRef = this.props.db.database().ref('posts');
        const post = {
            title: this.state.title,
            body: this.state.body,
            authorName: this.state.authorName,
            authorEmail: this.props.user.email,
            authorImg: this.props.user.photoURL,
            publishDate: today,
            upvotes: 0,
            downvotes: 0
        }
        postsRef.push(post);

        this.setState({
            title: '',
            body: '',
            authorName: '',
            authorEmail: '',
            authorImg: '',
            publishDate: ''
        });
    }
    render () {
        const {title, body, authorName} = this.state;
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
                    value={this.props.user.email}
                    type="email"
                    className={styles.authorEmail}
                    placeholder="Author Email Id"
                    readOnly
                ></input>
                <button onClick={this.handleSubmit} className={styles.articleSubmit}>Add Post</button>
            </div>
        );
    }
}
export default Form;
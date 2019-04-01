import React, { Component } from "react"
import { connect } from "react-redux";
import * as blogPostActions from '../../actions/blogPostActions'
// import FileUploader from "react-firebase-file-uploader";
// import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';


import styles from "./form.module.scss"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            authorName: '',
            // blogPostImage: "",
            // isUploading: false,
            // progress: 0,
            // blogPostImageURL: ""
        }
        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeField(key, event){
        this.setState({
            [key]: event.target.value
        });
    }
    // handleUploadSuccess = filename => {
    //     this.setState({ blogPostImage: filename, progress: 100, isUploading: false });
    //     firebase
    //       .storage()
    //       .ref("images")
    //       .child(filename)
    //       .getDownloadURL()
    //       .then(url => this.setState({ blogPostImageURL: url }));
    //   };
    handleSubmit(e){
        e.preventDefault();
        let today = (new Date()).toDateString();
        const post = {
            title: this.state.title,
            body: this.state.body,
            authorName: this.state.authorName,
            authorEmail: this.props.currentUser.email,
            authorImg: this.props.currentUser.photoURL,
            publishDate: today,
            upvotes: 0,
            downvotes: 0,
            upvotedBy: null,
            downvotedBy: null,
            commentCount: 0
        }

        this.props.createNewBlogPost(post);

        this.setState({
            title: '',
            body: '',
            authorName: ''
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
                    value={this.props.currentUser.email}
                    type="email"
                    className={styles.authorEmail}
                    placeholder="Author Email Id"
                    readOnly
                ></input>
                {/* <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
                    Image for your post
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.blogPostImageURL && <img src={this.state.blogPostImageURL} alt="" />}
                    <FileUploader
                        hidden
                        accept="image/*"
                        name="blogPostImage"
                        randomizeFilename
                        storageRef={this.props.db.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    ></FileUploader>
                </label> */}
                <button onClick={this.handleSubmit} className={styles.articleSubmit}>Add Post</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        createNewBlogPost: (post) => {
            dispatch(blogPostActions.createNewBlogPost(post));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
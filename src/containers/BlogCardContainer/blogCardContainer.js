import React from "react"

import BlogCard from "../../components/BlogCard/blogCard"
import styles from "./blogCardContainer.module.scss"

class BlogCardContainer extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        }
    }
    componentDidMount() {
        console.log("card Container Mounted");//////callled when logged out
        this._isMounted = true;
        const postsRef = this.props.db.database().ref('posts');
        postsRef.on('value', (snapshot) => {
            let posts = snapshot.val();
            let newblogPosts = [];
            for (let post in posts) {
                newblogPosts.push({
                    id: post,
                    title: posts[post].title,
                    body: posts[post].body,
                    authorName: posts[post].authorName,
                    authorEmail: posts[post].authorEmail,
                    authorImg: posts[post].authorImg,
                    publishDate: posts[post].publishDate
                });
            }
            console.log("are you gonna setState? " + this._isMounted);//////Not called when logged out
            if(this._isMounted){
                this.setState({
                    blogPosts: newblogPosts
                });
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
        console.log("Card Component Unmounted");
    }
    render () {
        return (
            <div className={styles.container}>
                {console.log(this._isMounted)}
                {this.state.blogPosts.map((blogPost) => {
                    return(
                        <BlogCard key={blogPost.id} cardState={blogPost}></BlogCard>
                    )
                })}
            </div>
        );
    }
}
export default BlogCardContainer;
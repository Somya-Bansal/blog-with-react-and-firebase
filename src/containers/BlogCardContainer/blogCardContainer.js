import React from "react"

import BlogCard from "../../components/BlogCard/blogCard"
import styles from "./blogCardContainer.module.scss"

class BlogCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        }
    }
    componentDidMount() {
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
                });
            }
            this.setState({
                blogPosts: newblogPosts
            });
        });
    }
    render () {
        return (
            <div className={styles.container}>
                {this.state.blogPosts.map((blogPost) => {
                    return(
                        <BlogCard title={blogPost.title} body={blogPost.body} author={blogPost.authorName}></BlogCard>
                    )
                })}
            </div>
        );
    }
}
export default BlogCardContainer;
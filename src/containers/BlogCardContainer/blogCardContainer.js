import React from "react"

import BlogCard from "../../components/BlogCard/blogCard"
import styles from "./blogCardContainer.module.scss"

class BlogCardContainer extends React.Component {
    render () {
        return (
            <div className={styles.container}>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
            </div>
        );
    }
}
export default BlogCardContainer;
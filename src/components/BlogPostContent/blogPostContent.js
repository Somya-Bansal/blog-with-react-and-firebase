import React from "react"

import styles from "./blogPostContent.module.scss"
import blogPic from "../../images/blog1.jpg"

class BlogPostContent extends React.Component {
    render() {
        return (
            <div className={styles.postContainer}>
                <h1 className={styles.postHeading}>
                    First post on this blog
                    </h1>
                <div className={styles.postMeta}>
                    <div className={styles.author}>
                        <span>by </span>
                        <span className={styles.authorName}>Somya Bansal</span>
                    </div>
                    <div className={styles.date}>
                        Thursday, November 13, 2014
                        </div>
                    <div className={styles.comments}>
                        0 comments
                        </div>
                </div>
                <div className={styles.blogPostImageContainer}>
                    <img className={styles.blogPostImage} alt="" src={blogPic}></img>
                </div>
                <div className={styles.blogPostContent}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui
                    </div>
            </div>
        );
    }
}
export default BlogPostContent;
import React from "react"

import styles from "./blogCard.module.scss"
import myPic from "../../images/my-pic.jpg"
import blogPic from "../../images/blog1.jpg"


class BlogCard extends React.Component {
    render() {
        return (
            <div className={styles.CardContainer}>
                <div className={styles.cardImage}>
                    <img alt="" src={blogPic}></img>
                </div>
                <div className={styles.cardText}>
                    <div>
                        <h2>
                            <a href="/blogPostPage/" className={styles.title}>
                                {this.props.title}
                            </a>
                        </h2>
                    </div>
                    <div className={styles.date}>Thursday, November 13, 2014</div>
                    <div className={styles.previewText}>
                        <p>
                            {this.props.body}
                        </p>
                    </div>
                    <a href="/blogPostPage/" className={styles.readMore}>Read More ></a>
                    <div className={styles.authorInfo}>
                        <img src={myPic} alt="" className={styles.authorImg}></img>
                        <p className={styles.authorName}>
                            by <a href="/about/">{this.props.author}</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default BlogCard;

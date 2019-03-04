import React from "react"
import { Link } from "react-router"

import styles from "./blogCard.module.scss"
import blogPic from "../../images/blog1.jpg"


class BlogCard extends React.Component {
    render() {
        return (
            <div className={styles.CardContainer}>
                <div className={styles.cardImage}>
                    <img alt="" src={blogPic}></img>
                </div>
                <div className={styles.cardText}>
                    <div className={styles.category}>Category</div>
                    <div className={styles.title}>
                        <h2>
                            <Link 
                                to={{
                                    pathname:'/blogPostPage',
                                    state: {
                                        id: this.props.cardState.id,
                                    }
                                }}
                                className={styles.title}
                            >
                                    {this.props.cardState.title}
                            </Link>
                        </h2>
                    </div>
                    <div className={styles.date}>{this.props.cardState.publishDate}</div>
                    <div className={styles.previewText}>
                        <p>
                            {(this.props.cardState.body).substring(0,200)}...
                        </p>
                    </div>
                    <Link 
                        to={{
                            pathname:'/blogPostPage',
                            state: {
                                id: this.props.cardState.id,
                            }
                        }}
                        className={styles.readMore}
                    >
                    Read More >
                    </Link>
                    <div className={styles.authorInfo}>
                        <img src={this.props.cardState.authorImg} alt="" className={styles.authorImg}></img>
                        <p className={styles.authorName}>
                            by <Link to="/about">{this.props.cardState.authorName}</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default BlogCard;

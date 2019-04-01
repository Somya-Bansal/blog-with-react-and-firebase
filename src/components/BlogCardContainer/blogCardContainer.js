import React from "react"
import { connect } from "react-redux";
import BlogCard from "../../components/BlogCard/blogCard"
import styles from "./blogCardContainer.module.scss"
import * as blogPostActions from '../../actions/blogPostActions'


class BlogCardContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBlogPosts();
    }
    render () {
        return (
            <div className={styles.container}>
                {this.props.blogPosts.map((blogPost) => {
                    return(
                        <BlogCard key={blogPost.id} cardState={blogPost} loggedInUser={this.props.loggedInUser}></BlogCard>
                    )
                })}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state.blogPosts);
    return {
        blogPosts: state.blogPosts
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogPosts: () => {
            dispatch(blogPostActions.fetchBlogPosts());
        }
    };
}
export default connect (mapStateToProps, mapDispatchToProps)(BlogCardContainer);
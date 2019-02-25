import React from 'react'
import { Router, Route } from 'react-router'
import App from './containers/App'
import BlogPostPage from "./containers/BlogPostPage/blogPostPage"

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App } />
        {/* Add components when pages/containers are ready */}
        <Route path="/skills"/>
        <Route path="/resume"/>
        <Route path="/about"/>
        <Route path="/blog"/>
        <Route path="/blogPostPage" component={ BlogPostPage }/>
    </Router>
);
export default Routes;
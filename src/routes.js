import React from 'react'
import { Router, Route } from 'react-router'
import App from './components/App'
import BlogPostPage from "./components/BlogPostPage/blogPostPage"

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App } />
        {/* Add components when pages/components are ready */}
        <Route path="/skills"/>
        <Route path="/resume"/>
        <Route path="/about"/>
        <Route path="/blog"/>
        <Route path="/blogPostPage" component={ BlogPostPage }/>
    </Router>
);
export default Routes;
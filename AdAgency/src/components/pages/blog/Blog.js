import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import blogs from '../../../api/BlogEntries';

class Blog extends Component {
  state = {
    blogs: blogs.blogs
  }

  render() {
    const { blogs } = this.state;

    return (
      <div className="page-wrapper blog-page">
        <h1>Blog</h1>
        <ul className="blog--categories">
          <li><Link to="/blog">All</Link></li>
          <li><Link to="/blog/uiux">UI/UX</Link></li>
          <li><Link to="/blog/development">Development</Link></li>
          <li><Link to="/blog/branding">Branding</Link></li>
          <li><Link to="/blog/illustration">Illustration</Link></li>
          <li><Link to="/blog/animation">Animation</Link></li>
        </ul>
        <div className="blog--subscribe">
          <h2>Want to stay up to date?</h2>
          <p>Sign up for weekly emails and updates.</p>
          <button className="cta-button subscribe-button">Subscribe</button>
        </div>
        <div className="blog--wrapper">
          <Fade left>
            {blogs.map((blog, index) => {
              return (
                <div key={index} className="blog--entry">
                  <Link to={`blog/${blog.url}`}>
                    <img src={blog.img} alt="blog image filler"/>
                  </Link>
                  <Link to={`blog/${blog.url}`} className="cta-button category-button">{blog.category}</Link>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    );
  }
} 

export default Blog;
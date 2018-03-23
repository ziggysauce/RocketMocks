import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer--left">
      <NavLink exact to="/" className="logo">Logo</NavLink>
      <p>
        Reliable. Transparent.  
      </p>
      <p>
        Logo is a DC based advertisement agency specializing in web development, UI/UX, animations, graphics, and content management. Let us help create a visual branding for your company.
      </p>
      <div className="footer--contact-details">
        <p>&copy; Logo</p>
        <p>logo@adagency.com</p>
        <p>+1 234 567 8910</p>
      </div>
      <div className="footer--social-media">
        <ul>
          <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
          <li><a href="#"><i className="fab fa-behance"></i></a></li>
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
          <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
          <li><a href="#"><i className="fab fa-tumblr"></i></a></li>
          <li><a href="#"><i className="fab fa-medium-m"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="footer--right">
      <NavLink to="/works">Works</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/agency">Agency</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/careers">Careers</NavLink>
      <NavLink to="/contact">Hire Us</NavLink>
    </div>
  </footer>
);

export default Footer;
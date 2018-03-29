import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer--left">
      <NavLink exact to="/" className="logo">
        <img src="https://image.flaticon.com/icons/svg/447/447767.svg" alt="logo"/>Koral
      </NavLink>
      <p>
        Reliable. Transparent.  
      </p>
      <p>
        Koral is a DC based advertisement agency specializing in web development, UI/UX, animations, graphics, and content management. Let us help create a visual branding for your company.
      </p>
      <div className="credit">
      <span>All images provided by <a href="https://unsplash.com/" target="_blank">unsplash.</a></span>
      <span>Icons provided by <a href="https://fontawesome.com/" target="_blank">font awesome.</a></span>
      <span>Clone/Inspiration of <a href="https://tubikstudio.com/" target="_blank">Tubik.</a></span>
      <span>Favicon/logo made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY.</a></span>
      </div>
      <div className="footer--contact-details">
        <p>&copy; Koral 2018</p>
        <p>mail@koral.com</p>
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
      <NavLink to="/">Home</NavLink>
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
import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => (
  <footer className="footer__wrapper">
    <Fade bottom>
      <h2>Are you ready to hire?</h2>
      <h3>Meet with me immediately</h3>
      <div className="separator"></div>
      <div>
        <ul className="footer--contact-details">
          <li>(248) 659 - 2754</li>
          <li><a href="mailto:dtn3423@gmail.com">dtn3423@gmail.com</a></li>
          <li><a href="http://danieltnguyen.com" target="_blank">danieltnguyen.com</a></li>
        </ul>
      </div>
      <div className="footer--social-links">
        <ul>
          <li><a href="https://www.linkedin.com/in/dtn3423/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://github.com/ziggysauce" target="_blank"><i className="fab fa-github"></i></a></li>
          <li><a href="https://codepen.io/ziggysauce/" target="_blank"><i className="fab fa-codepen"></i></a></li>
          <li><a href="https://medium.com/@ziggysauce" target="_blank"><i className="fab fa-medium-m"></i></a></li>
          <li><a href="https://drive.google.com/file/d/1VdoxUOacJ6HNdt8ZyIqjZT9s1QxdWzi1/view" target="_blank"><i className="fas fa-file-pdf"></i></a></li>
        </ul>
      </div>
    </Fade>
  </footer>
);

export default Footer;
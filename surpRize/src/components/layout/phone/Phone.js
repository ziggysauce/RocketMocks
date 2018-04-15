import React from 'react';

const Phone = () => (
  <div className="phone-screen">
    <div className="phone-screen__top">
      <div>
        <span><i className="fas fa-signal"></i></span>
        <span><i className="fas fa-wifi"></i></span>
      </div>
      <div>
        9:41 AM
      </div>
      <div>
        <span><i className="fab fa-bluetooth-b"></i></span>
        <span>100%</span>
        <span><i className="fas fa-battery-full"></i></span>
      </div>
    </div>
    <div className="phone-screen__main">
      <div className="phone-screen__main--person">
        <img src="https://preview.ibb.co/cRNxBn/ny_square.jpg" alt="profile picture"/>
        <p>Daniel Nguyen</p>
      </div>
      <div className="phone-screen__main--social-media">
        <a href="https://www.linkedin.com/in/dtn3423/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/ziggysauce" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://codepen.io/ziggysauce/" target="_blank"><i className="fab fa-codepen"></i></a>
        <a href="https://medium.com/@ziggysauce" target="_blank"><i className="fab fa-medium-m"></i></a>
        <a href="https://drive.google.com/file/d/1VdoxUOacJ6HNdt8ZyIqjZT9s1QxdWzi1/view" target="_blank"><i className="fas fa-file-pdf"></i></a>
      </div>
      <div className="phone-screen__main--contact">
        <h3>Phone</h3>
        <p>248-659-2754</p>
      </div>
      <div className="phone-screen__main--contact">
        <h3>Email</h3>
        <p>dtn3423@gmail.com</p>
      </div>
      <div className="phone-screen__main--contact">
        <h3>Portfolio</h3>
        <a href="http://danieltnguyen.com" target="_blank">danieltnguyen.com</a>
      </div>
    </div>
    <div className="phone-screen__bottom">
      <span>Contact Me</span>
      <span>Hire Me</span>
    </div>
  </div>
);

export default Phone;
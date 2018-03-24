import React from 'react';

const Services = () => (
  <div className="page-wrapper">
    <h1>Our Services</h1>
    <div className="service-type--wrapper">
      <div className="service-type service-energy">
        <span>Energy</span>
      </div>
      <div className="service-type service-finance">
        <span>Business</span>
      </div>
      <div className="service-type service-healthcare">
        <span>Health Care</span>
      </div>
      <div className="service-type service-entertainment">
        <span>Media</span>
      </div>
    </div>
    <div className="services--wrapper">
      <div className="services--card">
        <span className="services--icon"><i className="fas fa-paint-brush"></i></span>
        <h2>Graphic Design</h2>
        <p>Innovative graphics to enhance your needs.</p>
      </div>
      <div className="services--card">
        <span className="services--icon"><i className="fas fa-video"></i></span>
        <h2>Video Animations</h2>
        <p>Eye-catching animations to impress your clients.</p>
      </div>
      <div className="services--card">
        <span className="services--icon"><i className="fas fa-chart-line"></i></span>
        <h2>SEO</h2>
        <p>Let us help turn your genius idea into a well-known product.</p>
      </div>
      <div className="services--card">
        <span className="services--icon"><i className="fas fa-code"></i></span>
        <h2>Application Development</h2>
        <p>We can create an impressive, scalable, web or mobile application to generate leads on your project.</p>
      </div>
      <div className="services--card">
        <span className="services--icon"><i className="fas fa-tag"></i></span>
        <h2>Branding</h2>
        <p>Keep your product desirable and we'll help you sell it.</p>
      </div>
      <div className="services--card">
        <span className="services--icon"><i className="fas fa-bug"></i></span>
        <h2>Testing</h2>
        <p>Our expert team will ensure that your product has no bugs to maximize capabilities.</p>
      </div>
    </div>
  </div>
);

export default Services;
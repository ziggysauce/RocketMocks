import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from './carousel/Reviews';

const Dashboard = () => (
  <div className="page-wrapper">

    <div className="homepage--hero">
      <h1>Koral</h1>
      <p>We are a state of the art advertising agency that specializes in mobile/web design & development, animations, graphics and branding.</p>
      <Link to="/contact" className="cta-button home-cta-button">Let's Talk!</Link>
    </div>
    <div className="homepage--clients-section">
      <h2>We Value Our Clients</h2>
      <p>We've had an amazing chance to work with big IT companies and small start-ups from a wide range of countries creating cool products on various topics.</p>
      <div className="homepage--clients">
        <ul>
          <li>Company 1</li>
          <li>Company 2</li>
          <li>Company 3</li>
          <li>Company 4</li>
          <li>Company 5</li>
          <li>Company 6</li>
          <li>Company 7</li>
          <li>Company 8</li>
        </ul>
      </div>
    </div>
    <Reviews />
  </div>
);

export default Dashboard;
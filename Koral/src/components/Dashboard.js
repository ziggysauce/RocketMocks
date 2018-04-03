import React from 'react';
import { Link } from 'react-router-dom';
import Examples from './carousel/Examples';
import Reviews from './carousel/Reviews';
import Fade from 'react-reveal/Fade';

const Dashboard = () => (
  <div className="page-wrapper">

    <div className="homepage--hero">
      <h1>Koral</h1>
      <Link to="/contact" className="cta-button home-cta-button">Let's Talk!</Link>
    </div>
    <div className="homepage--work">
      <p>We are a state of the art advertising agency that specializes in mobile/web design & development, animations, graphics and branding.</p>
      <div>
        <Examples />
      </div>
    </div>
    <div className="homepage--clients-section">
      <Fade left>
        <h2>Our Clients Love What We Do</h2>
        <p>We have experience with both large tech companies and small start-ups from a wide range of products and businesses.</p>
      </Fade>
      <Fade right>
        <div className="homepage--clients">
          <ul>
            <li>
              <img src="https://image.flaticon.com/icons/svg/363/363190.svg" alt="logo img filler"></img>
              <span className="steadygrind">Steady Grind Coffee</span>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/265/265700.svg" alt="logo img filler"></img>
              <span className="smp">SMP Financial</span>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/607/607299.svg" alt="logo img filler"></img>
              <span className="mnsolar">M&N Solar</span>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/139/139909.svg" alt="logo img filler"></img>
              <span className="hemptations">Hemptations Resorts</span>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/150/150654.svg" alt="logo img filler"></img>
              <span className="swet">S'wet</span>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/131/131116.svg" alt="logo img filler"></img>
              <span className="selerium">Selerium</span>
            </li>
            <li>
              <img src="https://image.flaticon.com/icons/svg/651/651488.svg" alt="logo img filler"></img>
              <span className="midori">Midori</span>
            </li>
            <li>
              <span className="michelin">Michelin Studios</span>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
    <Reviews />
  </div>
);

export default Dashboard;
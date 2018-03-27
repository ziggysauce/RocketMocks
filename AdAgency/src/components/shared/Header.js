import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="navbar">
    <NavLink exact to="/" className="logo">
      <img src="https://image.flaticon.com/icons/svg/447/447767.svg" alt="logo"/>Koral
    </NavLink>
    <div className="navbar--links">
      <NavLink to="/works">Works</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/agency">Agency</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Hire Us</NavLink>
    </div>
    <div className="navbar--menu">
      <i className="fas fa-bars"></i>
    </div>
  </header>
);

export default Header;
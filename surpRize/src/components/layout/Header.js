import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="navbar__wrapper">
    <h1>surpRIZE</h1>
    <div className="navbar__links">
      <NavLink exact to="/">About</NavLink>
      <NavLink exact to="/">Support</NavLink>
      <NavLink exact to="/">Sign Up</NavLink>
      <NavLink exact to="/">Log In</NavLink>
    </div>
  </header>
);

export default Header;
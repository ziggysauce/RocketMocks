import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>This is the Header</h1>
    <NavLink exact to="/">Dashboard</NavLink>
  </header>
);

export default Header;
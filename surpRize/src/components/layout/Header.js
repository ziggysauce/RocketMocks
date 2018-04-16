import React from 'react';

const Header = () => (
  <header className="navbar__wrapper">
    <h1>surpRIZE</h1>
    <div className="navbar__links">
      <a exact to="/">About</a>
      <a exact to="/">Traits</a>
      <a exact to="/">Work</a>
      <a exact to="/">Interest</a>
    </div>
  </header>
);

export default Header;
import React from 'react';

const Header = (props) => (
  <header className="navbar__wrapper">
    <h1>surpRIZE</h1>
    <div className="navbar__links">
      <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#about">About</a>
      <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#traits">Traits</a>
      <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#work">Work</a>
      <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#interest">Interest</a>
    </div>
  </header>
);

export default Header;
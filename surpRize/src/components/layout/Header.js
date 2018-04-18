import React from 'react';

const Header = (props) => {
  const { top, mobileNav } = props.state;

  return (
    <header className={top ? "navbar__wrapper transparent" : "navbar__wrapper"}>
      <h1>surpRIZE</h1>
      <div className={top ? "navbar__links transparent" : "navbar__links"}>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#about">About</a>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#traits">Traits</a>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#work">Work</a>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#interest">Interest</a>
      </div>
      <button className={mobileNav ? "toggle-button-display" : (top ? "navbar__mobile--toggle navbar__mobile--white" : "navbar__mobile--toggle")} onClick={() => props.handleMobileNav()}><i className="fas fa-bars"></i></button>
      <button className={mobileNav ? "navbar__mobile--toggle" : "toggle-button-display"} onClick={() => props.handleMobileNav()}><i className="fas fa-times"></i></button>
      <div className={mobileNav ? "navbar__mobile" : "navbar__mobile--closed"}>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#about">About</a>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#traits">Traits</a>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#work">Work</a>
        <a onClick={(e) => props.scrollTo(e.target.getAttribute('href'))} href="#interest">Interest</a>
      </div>
    </header>
  );
}

export default Header;
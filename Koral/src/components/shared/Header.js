import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  state = {
    mobile: false,
    initial: false
  }

  handleOnClickMenu = () => {
    this.state.mobile ? this.setState({ mobile: false, initial: true }) : this.setState({ mobile: true, initial: true });
  }

  render() {
    return (
      <header className="navbar">
        <NavLink exact to="/" className="logo">
          <img src="https://image.flaticon.com/icons/svg/447/447767.svg" alt="logo"/>Koral
        </NavLink>
        <div className="navbar--links">
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/agency">Agency</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div onClick={() => this.handleOnClickMenu()} className="navbar--menu">
          <i className="fas fa-bars"></i>
        </div>
        <div onClick={() => this.handleOnClickMenu()} className={this.state.mobile ? "navbar--menu__close" : "navbar--menu__inactive"}>
          <i className="fas fa-times"></i>
        </div>
        <div className={this.state.mobile ? "navbar--mobile__active" : ( this.state.initial ? "navbar--mobile__inactive" : "navbar--menu__inactive" )}>
          <NavLink onClick={() => this.handleOnClickMenu()} to="/">Home</NavLink>
          <NavLink onClick={() => this.handleOnClickMenu()} to="/works">Works</NavLink>
          <NavLink onClick={() => this.handleOnClickMenu()} to="/services">Services</NavLink>
          <NavLink onClick={() => this.handleOnClickMenu()} to="/agency">Agency</NavLink>
          <NavLink onClick={() => this.handleOnClickMenu()} to="/blog">Blog</NavLink>
          <NavLink onClick={() => this.handleOnClickMenu()} to="/contact">Contact Us</NavLink>
        </div>
      </header>
    );
  }
} 


export default Header;
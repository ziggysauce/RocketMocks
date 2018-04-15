import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Phone from './phone/Phone';

class Intro extends Component {
  render() {
    return (
      <div className="intro__wrapper">
        <Particles 
          className="particles"
          params={{
            particles: {
              line_linked: {
                enable: false,
                color: '#ffffff',
                opacity: 0.12,
                width: 0.47,
              },
              move: {
                enable: true,
                speed: 1.5,
              }
            }
          }}
        />
        <div className="intro__banner">
          <div className="intro__banner--text">
            <h1>Save Time & Invest in Who Matters.</h1>
            <h2>Submitting my application to your finance application</h2>
          </div>
          <div className="phone-mockup">
            <div className="phone-mockup--audio"></div>
            <div className="phone-mockup--screen">
              <Phone />
            </div>
            <div className="phone-mockup--button"></div>
          </div>
        </div>
        <div className="point-bg-transparent"></div>
        <div className="point-bg-white"></div>
      </div>
    );
  }
}

export default Intro;
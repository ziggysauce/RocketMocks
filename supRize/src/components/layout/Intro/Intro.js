import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Intro extends Component {
  render() {
    return (
      <div className="intro__wrapper">
        <Particles 
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
          <h1>Save Time & Invest in Who Matters!!</h1>
          <h2>Putting talent into your workplace</h2>
        </div>
        Intro section
      </div>
    );
  }
}

export default Intro;
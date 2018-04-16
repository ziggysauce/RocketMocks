import React from 'react';
import Fade from 'react-reveal/Fade';
import projects from './work/work';

const PastWork = () => (
  <div className="pastwork__wrapper">
    <Fade bottom>
      <h2>Lower your hesitations and check out some of my work.</h2>
      <h3>Click the <span>icon</span> to see the live site.</h3>
    </Fade>
    <Fade bottom>
      <div className="pastwork--projects__wrapper">
        <div className="pastwork--projects__card">
          <a className="pastwork--projects__icon" href="#"><i className="fas fa-piggy-bank"></i></a>
          <h4 className="pastwork--projects__title">surpRIZE</h4>
          <a className="pastwork--projects__link" href="https://github.com/ziggysauce/RocketMocks/tree/master/surpRize" target="_blank">Repository</a>
        </div>
        <p>My surprise for RIZE built with React</p>
      </div>
      <div className="pastwork--projects__wrapper">
        <div className="pastwork--projects__card">
          <a className="pastwork--projects__icon" href="http://koral.ziggysauce.surge.sh/" target="_blank"><i className="fas fa-anchor"></i></a>
          <h4 className="pastwork--projects__title">Koral</h4>
          <a className="pastwork--projects__link" href="https://github.com/ziggysauce/RocketMocks/tree/master/Koral" target="_blank">Repository</a>
        </div>
        <p>B2B Advertising Agency Clone built with React</p>
      </div>
      <div className="pastwork--projects__wrapper">
        <div className="pastwork--projects__card">
          <a className="pastwork--projects__icon" href="https://chingu-coders.github.io/Voyage2-Turtles-02/src/" target="_blank"><i className="fas fa-cog"></i></a>
          <h4 className="pastwork--projects__title">DevTab</h4>
          <a className="pastwork--projects__link" href="https://github.com/chingu-coders/Voyage2-Turtles-02" target="_blank">Repository</a>
        </div>
        <p>Browser extension for front-end developers built with jQuery</p>
      </div>
      <div className="pastwork--projects__wrapper">
        <div className="pastwork--projects__card">
          <a className="pastwork--projects__icon" href="http://anjalitaneja.com/" target="_blank"><i className="fas fa-music"></i></a>
          <h4 className="pastwork--projects__title">Anjali Taneja</h4>
          <a className="pastwork--projects__link" href="https://github.com/ziggysauce/anjali_taneja" target="_blank">Repository</a>
        </div>
        <p>Local music artist webpage built with vanilla JS</p>
      </div>
    </Fade>
  </div>
);

export default PastWork;
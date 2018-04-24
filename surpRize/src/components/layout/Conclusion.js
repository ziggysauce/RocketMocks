import React from 'react';
import Fade from 'react-reveal/Fade';

const Conclusion = () => (
  <div className="conclusion__wrapper">
    <div className="conclusion__content" id="interest">
      <Fade left>
        <h2>Why Am I Interested?</h2>
      </Fade>
      <Fade right>
        <p>This web application is to express my interest in the Front End Engineer position at Rize. As shown above, I am a self-taught programmer with experience in both frontend and backend web development. I am passionate and proud of the work I produce and would love the opportunity to expand on it with a successful company like Rize.</p>
      </Fade>
    </div>
    <div className="point-conclusion"></div>
    <div className="point-conclusion-dark"></div>
    <div className="post-conclusion"></div>
  </div>
);

export default Conclusion;
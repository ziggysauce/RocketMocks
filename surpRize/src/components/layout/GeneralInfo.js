import React from 'react';
import Fade from 'react-reveal/Fade';

const GeneralInfo = () => (
  <div className="gen-info__wrapper" id="traits">
    <h2>Hiring takes effort, <strong>but I can help.</strong></h2>
    <div className="gen-info--attributes">
      <Fade bottom>
        <div>
          <span className="gen-info--icon-wrapper-1"><i className="fas fa-bolt"></i></span>
          <p>I learn quickly</p>
          <p>I'm fully self-taught and constantly learning new technologies while staying up to date on industry trends and advancements.</p>
        </div>
        <div>
          <span className="gen-info--icon-wrapper-2"><i className="fas fa-puzzle-piece"></i></span>
          <p>I solve problems</p>
          <p>I write clean, scalable code, with a mobile-first approach. Efficiency, optimizations, and incredible UI/UX is a part of my toolkit.</p>
        </div>
        <div>
          <span className="gen-info--icon-wrapper-3"><i className="fas fa-people-carry"></i></span>
          <p>I work well in teams</p>
          <p>I've had experience as a developer and project manager for remote teams. I know how to effectively communicate and work together.</p>
        </div>
      </Fade>
    </div>
  </div>
);

export default GeneralInfo;
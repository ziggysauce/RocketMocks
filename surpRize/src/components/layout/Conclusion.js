import React from 'react';
import Fade from 'react-reveal/Fade';

const Conclusion = () => (
  <div className="conclusion__wrapper">
    <div className="conclusion__content">
      <Fade left>
        <h2>Why Am I Interested?</h2>
      </Fade>
      <Fade right>
        <p>This web application is to express interest in the Front End Engineer position at Rize. As shown above, I am a self-taught programmer with experience in both frontend (HTML, CSS/SCSS, JS/React) and backend (Express, Node) web development. I am passionate and proud of the work I produce and would love the opportunity to expand on it with a successful company like Rize.</p>
        <p>I am drawn to the company’s dedication to saving money and making it effortless. I find this service as an incredible segue into furthering individuals’ lives without the extra pressure and thought behind micro savings. I see tremendous potential for growth in this company’s goals, and would be enthusiastic in contributing to its success.</p>
        <p>I will commit my skill set to adding to an adept workplace. I strive to write clean and concise code while paying close attention to details in order to achieve optimal efficiency. I am eager to learn new technologies and stay up-to-date on industry trends and advancements especially if they suit your company's needs.</p>
      </Fade>
    </div>
    <div className="point-conclusion"></div>
    <div className="point-conclusion-dark"></div>
    <div className="post-conclusion"></div>
  </div>
);

export default Conclusion;
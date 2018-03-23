import React from 'react';

const Contact = () => (
  <div className="page-wrapper contact-page">
    <div className="contact--hero">
      <h1>Contact Us</h1>
    </div>
    <h2>We'd love to hear about your idea!</h2>
    <div className="contact-form--wrapper">
      <form className="contact-form" action="index.html" method="post">
        <div className="input-wrapper">
          <span>
            <input type="text" name="name" required />
            <span className="floating-label">Name</span>
          </span>
        </div>
        <div className="input-wrapper">
          <span>
            <input type="text" name="email_address" required />
            <span className="floating-label">Email</span>
          </span>
        </div>
        <div className="input-wrapper">
          <span>
            <textarea name="message" rows="1" required></textarea>
            <span className="floating-label">Project Details</span>
          </span>
        </div>
        <button className="cta-button submit-button" type="submit" name="submit-message">Submit</button>
      </form>
    </div>
  </div>
);

export default Contact;
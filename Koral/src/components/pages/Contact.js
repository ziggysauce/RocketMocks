import React from 'react';

class Contact extends React.Component {
  state = {
    submit: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submit: true });
    setTimeout(() => {
      this.setState({ submit: false });
    }, 3000);  
  }

  render() {
    return (
      <div className="page-wrapper contact-page">
        <div className="contact--hero">
          <h1>Contact Us</h1>
        </div>
        <h2>We'd love to hear about your idea!</h2>
        <div className="contact-form--wrapper">
          <form className="contact-form" onSubmit={(e) => {this.handleSubmit(e)}}>
            <div className="input-wrapper">
              <span>
                <input type="text" name="name" required />
                <span className="floating-label" required>Name</span>
              </span>
            </div>
            <div className="input-wrapper">
              <span>
                <input type="email" name="email_address" required />
                <span className="floating-label" required>Email</span>
              </span>
            </div>
            <div className="input-wrapper">
              <span>
                <textarea name="message" rows="1" required></textarea>
                <span className="floating-label" required>Project Details</span>
              </span>
            </div>
            <button className="cta-button submit-button" type="submit" name="submit-message">Submit</button>
          </form>
          {this.state.submit && <h3>Message sent! (Kidding, nothing actually happened)</h3>}
        </div>
      </div>
    );
  }
}

export default Contact;
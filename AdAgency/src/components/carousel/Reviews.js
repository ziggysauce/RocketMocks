import React from 'react';
import ReviewSlide from './ReviewSlide';

class Reviews extends React.Component {
  state = {
    index: 0,
  }

  render() {
    return (
      <div className="carousel">
        <ul>
          <ReviewSlide carousel={this.state}/>
        </ul>
        <ul className="carousel-toggle">
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
        </ul>
      </div>
    );
  }
}

export default Reviews;


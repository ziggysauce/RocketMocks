import React from 'react';
import ReviewSlide from './ReviewSlide';
import reviews from '../../api/Reviews';

class Reviews extends React.Component {
  state = {
    index: 0,
    reviews: reviews.reviews
  }

  handleOnClick = (index) => this.setState({ index });

  render() {
    return (
      <div className="carousel">
        <ul>
          <ReviewSlide carousel={this.state}/>
        </ul>
        <ul className="carousel-toggle">
        {this.state.reviews.map((review, index) => {
          return(
            <li key={index}>
              <button 
                className={this.state.index === index ? 'carousel-toggle--button__active' : 'carousel-toggle--button'} 
                onClick={() => this.handleOnClick(index)}
              />
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Reviews;


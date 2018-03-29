import React from 'react';
import ReviewSlide from './ReviewSlide';
import reviews from '../../api/Reviews';

class Reviews extends React.Component {
  state = {
    index: 0,
    reviews: reviews.reviews
  }

  handleOnClick = (index) => this.setState({ index });

  rotateSlide = () => {
    let index = this.state.index;
    index === 4 ? index = 0 : index += 1;
    this.setState({ index });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.rotateSlide(), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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


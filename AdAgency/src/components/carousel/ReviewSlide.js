import React from 'react';

const ReviewSlide = (props) => {
  const { reviews } = props.carousel;
  const index = props.carousel.index;

  return (
    <li>
      <img src={reviews[index].logo} alt="logo img filler"></img>
      <p className="review-text">"{reviews[index].review}"</p>
      <p className="review-author">{reviews[index].author}</p>
      <p className="review-company">{reviews[index].company}</p>
    </li>
  );
}

export default ReviewSlide;
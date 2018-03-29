import React from 'react';

const ReviewSlide = (props) => {
  console.log('from review slide: ', props);
  const { reviews } = props.carousel;
  const index = props.carousel.index;

  return (
    <li>
      <div>
        <img src={reviews[index].logo} alt="logo img filler"></img>
        <span>{reviews[index].company}</span>
      </div>
      <p className="review-text">"{reviews[index].review}"</p>
      <p className="review-author">{reviews[index].author}</p>
      <p className="review-company">{reviews[index].company}</p>
    </li>
  );
}

export default ReviewSlide;
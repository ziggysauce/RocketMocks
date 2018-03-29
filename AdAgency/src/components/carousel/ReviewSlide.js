import React from 'react';

const ReviewSlide = (props) => {
  const { reviews } = props.carousel;
  const index = props.carousel.index;

  return (
    reviews.map((review, slideIndex) => {
      return (
        <li key={slideIndex} className={slideIndex === index ? "review-slide" : "hide-slide"}>
          <img src={review.logo} alt="logo img filler"></img>
          <p className="review-text">"{review.review}"</p>
          <p className="review-author">{review.author}</p>
          <p className="review-company">{review.company}</p>
        </li>
      );
    })
  )
}

export default ReviewSlide;
import React, { useEffect, useContext, useState } from 'react';
// import { MovieContext } from '../MovieContext';

const Reviews = ({id}) => {
  const [reviews, setReviews] = useState('');
  console.log(reviews, 'rev')

  const [reviewsToRender, setReviewsToRender] = useState(3);

//   const context = useContext(MovieContext);

  useEffect(() => {
    // const [data] = context;
    const getReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`
        );

        if (response) {
          const result = await response.json();
          const reviews = result.results;
          console.log(reviews, 'context');
          setReviews(reviews);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, [id]);

  const handleClick = () => {
    setReviewsToRender(reviewsToRender + 2)
  }

  return <div className="reviews-wrapper">
       {reviews.length === 0 ? null : <h1 className="review-title">Reviews</h1>}
      {reviews ? reviews.slice(0, reviewsToRender).map(review => {
          return <div className="reviews" key={review.id}>
              <p className="author">{review.author}</p>
              <p className="content">
                {review.content.slice(0, 200) + '...'}Read more
              </p>
            </div>;
        }) : null}
        {reviews.length >= 4 ?
      <div className="show-more-movies-wrapper">
        <span className="show-more-movies-link" onClick={handleClick}>
          Show more reviews
        </span>
      </div>
      : null }
    </div>;
};

export default Reviews;

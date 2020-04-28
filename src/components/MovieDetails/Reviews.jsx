import React, { useEffect, useContext, useState } from 'react';
import { MovieContext } from '../MovieContext';

const Reviews = () => {
  const [reviews, setReviews] = useState('');

  const context = useContext(MovieContext);

  useEffect(() => {
    const [data] = context;
    const getReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${data.id}/reviews?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`
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
  }, []);

  return (
    <div>
    {reviews ? reviews.map(review => {
        return <div key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </div>;
    }) : null}
    </div>
  );
};

export default Reviews;

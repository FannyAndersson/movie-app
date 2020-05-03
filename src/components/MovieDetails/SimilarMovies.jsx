import React, { useEffect, useContext, useState } from 'react';

const SimilarMovies = ({props}) => {
   const { props: { match: { params } } } = props;
  const [similarMovies, setSimilarMovies] = useState('');

  useEffect(() => {
    const getSimilarMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`);

        if (response) {
          const result = await response.json();
          setSimilarMovies(result.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSimilarMovies();
  }, []);

  return <div>
      {similarMovies ? similarMovies.map(movie => {
          return <a key={movie.id} href={`/movie/${movie.id}`} className="movie-link">
              {' '}
              <div className="cast-member-card">
                <div className="image-container">
                  <img alt="" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                </div>
                <div className="cast-info">
                  <p>{movie.title}</p>
                  <span>{movie.release_date}</span>
                </div>
              </div>
            </a>;
      }) : null }

    </div>;
};

export default SimilarMovies;

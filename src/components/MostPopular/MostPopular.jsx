import React, { useEffect, useContext, useState } from 'react';
import { MovieContext } from '../MovieContext';
import { Link } from 'react-router-dom';

const MostPopular = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState('');

  const context = useContext(MovieContext);

  useEffect(() => {
    const [data] = context;
    const getMostPopular = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`
        );

        if (response) {
          const result = await response.json();
          const mostPopularResult = result.results;
          console.log(mostPopularResult);
          setMostPopularMovies(mostPopularResult);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getMostPopular();
  }, []);

  return <div>
      <h3>Populäraste filmerna</h3>
      {mostPopularMovies ? mostPopularMovies.map(movie => {
          return <div className="movie-info-wrapper" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                {' '}
                <img alt="" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
              </Link>
              <div className="movie-info-div">
                <h4>{movie.title}</h4>
                <p className="movie-info">{movie.release_date}</p>
                <p className="movie-info">{movie.vote_average}</p>
                <p className="movie-info-overview">
                  {movie.overview.slice(0, 200) + '...'}
                  <Link to={`/movie/${movie.id}`}>Läs mer</Link>
                </p>
              </div>
            </div>;
        }) : null}
    </div>;
};

export default MostPopular;

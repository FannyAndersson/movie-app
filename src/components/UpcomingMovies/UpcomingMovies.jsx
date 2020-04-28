import React, { useEffect, useContext, useState } from 'react';
import { MovieContext } from '../MovieContext';
import { Link } from 'react-router-dom';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState('');

  const context = useContext(MovieContext);

  useEffect(() => {
    const [data] = context;
    const getUpcomingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`
        );

        if (response) {
          const result = await response.json();
          const upcomingResult = result.results;
          console.log(upcomingResult);
          setUpcomingMovies(upcomingResult);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUpcomingMovies();
  }, []);

  return <div>
      <h3>Kommande filmer</h3>
      {upcomingMovies ? upcomingMovies.map(movie => {
            return <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {' '}
                  <img alt="" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                </Link>
                <h4>{movie.title}</h4>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
                <p>{movie.overview.slice(0, 200) + '...'}</p>
                <Link to={`/movie/${movie.id}`}>
                  Läs mer
                </Link>
              </div>;
      }) : null}
  </div>;
};

export default UpcomingMovies;

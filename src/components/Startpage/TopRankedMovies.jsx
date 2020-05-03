import React, { useEffect, useContext, useState } from 'react';
// import { MovieContext } from '../MovieContext';
import { Link } from 'react-router-dom';
import MovieInfo from '../MovieDetails/MovieInfo'
import {Col, Container} from 'reactstrap';

const TopRankedMovies = () => {
  const [topRankedMovies, setTopRankedMovies] = useState('');

  const [moviesToRender, setMoviesToRender] = useState(4)

//   const context = useContext(MovieContext);

  useEffect(() => {
    // const [data] = context;
    const getTopRankedMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`);

        if (response) {
          const result = await response.json();
          setTopRankedMovies(result.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTopRankedMovies();
  }, []);

  const handleClick = () => {
      setMoviesToRender(moviesToRender + 4)
  }

  return <div>
      <h1>Top ranked movies</h1>
      {topRankedMovies ? topRankedMovies
          .slice(0, moviesToRender)
          .map((movie, index) => {
            return (
              <div className='movie-info-wrapper' key={index}>
                <Link to={`/movie/${movie.id}`}>
                  {' '}
                  <img
                    alt=""
                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  />
                </Link>
                <div className='movie-info-div'>
                  <h4>{movie.title}</h4>
                  <p className="movie-info">{movie.release_date}</p>
                  <p className="movie-info">{movie.vote_average}</p>
                  <p className="movie-info-overview">
                    {movie.overview.slice(0, 200) + '...'}
                    <Link to={`/movie/${movie.id}`}>Read more</Link>
                  </p>
                </div>
              </div>
            );
          }) : null}
      <div className="show-more-movies-wrapper">
      <span className="show-more-movies-link" onClick={handleClick}>
        Show more movies
      </span>
      </div>
    </div>;
};

export default TopRankedMovies;

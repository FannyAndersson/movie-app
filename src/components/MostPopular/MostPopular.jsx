import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';

const MostPopular = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState('');


  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`
        );

        if (response) {
          const result = await response.json();
          const mostPopularResult = result.results;
          setMostPopularMovies(mostPopularResult);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getMostPopular();
  }, []);



  return <div>
      <h1 className="movielist-title">Most popular movies</h1>
      <MovieList props={mostPopularMovies} />
    </div>;
};

export default MostPopular;

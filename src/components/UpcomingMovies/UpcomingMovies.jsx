import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState('');

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`
        );

        if (response) {
          const result = await response.json();
          setUpcomingMovies(result.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUpcomingMovies();
  }, []);


  return <div>
      <h1 className="movielist-title">Upcoming movies</h1>
      <MovieList props={upcomingMovies} />
    </div>;
};

export default UpcomingMovies;

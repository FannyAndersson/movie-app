import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';
import { MovieContext } from '../MovieContext';


const UpcomingMovies = () => {

  const { upcomingMovies, setUpcomingMovie, getUpcomingMovies } = useContext(MovieContext);
  console.log('upup', upcomingMovies);
  // const [upcomingMovies, setUpcomingMovies] = useState('');

useEffect(() => {
  getUpcomingMovies();
},[])


  return <div>
      <h1 className="movielist-title">Upcoming movies</h1>
      <MovieList props={upcomingMovies} />
    </div>;
};

export default UpcomingMovies;

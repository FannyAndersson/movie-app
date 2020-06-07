import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';
import { MovieContext } from '../MovieContext';


const MostPopular = () => {

  const { mostPopularMovies, setMostPopularMovies, getMostPopular} = useContext(MovieContext);
  console.log('sessionId', mostPopularMovies);
  // const [mostPopularMovies, setMostPopularMovies] = useState('');


useEffect(() => {
  getMostPopular();
}, [])



  return <div>
      <h1 className="movielist-title">Most popular movies</h1>
      <MovieList props={mostPopularMovies} />
    </div>;
};

export default MostPopular;

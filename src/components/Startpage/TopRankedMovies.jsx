import React, { useEffect, useContext, useState } from 'react';
import MovieList from '../MovieList'
import { Link } from 'react-router-dom';
// import MovieInfo from '../MovieDetails/MovieInfo'
import {Col, Container} from 'reactstrap';
import {MovieContext} from '../MovieContext'

const TopRankedMovies = () => {

   const [topRankedMovies, setTopRankedMovies] = useContext(MovieContext);


  useEffect(() => {

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



  return <div>
      <h1 className="movielist-title">Top ranked movies</h1>
       <MovieList props={topRankedMovies} />
    </div>;
};

export default TopRankedMovies;

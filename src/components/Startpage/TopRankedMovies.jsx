import React, { useEffect, useContext, useState } from 'react';
import MovieList from '../MovieList'
import { Link } from 'react-router-dom';
// import MovieInfo from '../MovieDetails/MovieInfo'
import {Col, Container} from 'reactstrap';
import {MovieContext} from '../MovieContext'

const TopRankedMovies = () => {

   const { topRankedMovies, setTopRankedMovies, getTopRankedMovies } = useContext(MovieContext);
   console.log(topRankedMovies,'toptop')


useEffect(() => {
  getTopRankedMovies();
},[])


  return <div>
      <h1 className="movielist-title">Top ranked movies</h1>
       <MovieList props={topRankedMovies} />
    </div>;
};

export default TopRankedMovies;

import React, {useContext, useEffect} from 'react';
import NowPlayingMovies from '../Startpage/NowPlayingMovies';
import { MovieContext } from '../MovieContext';
import MovieInfo from './MovieInfo';
import Cast from './Cast';
import SimilarMovies from './SimilarMovies';
import Reviews from './Reviews';


const MovieDetails = (props) => (
    <MovieInfo props={props} />
)

export default MovieDetails;
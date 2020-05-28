import React, {useEffect, useState, createContext, useContext} from 'react';
import {AuthContext} from './AuthContext.jsx';



export const MovieContext = createContext();

export const MovieProvider = (props) => {

     const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);

    const [topRankedMovies, setTopRankedMovies] = useState('');

  const [upcomingMovies, setUpcomingMovies] = useState('');

  const [mostPopularMovies, setMostPopularMovies] = useState('');

const [movieId, setMovieId] = useState(null);



    return(
        <MovieContext.Provider value={[upcomingMovies, setUpcomingMovies, topRankedMovies, setTopRankedMovies, mostPopularMovies, setTopRankedMovies, movieId, setMovieId]}>
            {props.children}
            </MovieContext.Provider>
    )

}
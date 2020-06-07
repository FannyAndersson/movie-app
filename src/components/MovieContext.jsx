import React, {useEffect, useState, createContext, useContext} from 'react';
import {AuthContext} from './AuthContext.jsx';



export const MovieContext = createContext();

export const MovieProvider = (props) => {

     const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);

    const [topRankedMovies, setTopRankedMovies] = useState('');

  const [upcomingMovies, setUpcomingMovies] = useState('');

  const [mostPopularMovies, setMostPopularMovies] = useState('');

const [movieId, setMovieId] = useState(null);



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



     const getUpcomingMovies = async () => {
       try {
         const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`);

         if (response) {
           const result = await response.json();
           setUpcomingMovies(result.results);
         }
       } catch (error) {
         console.error(error);
       }
     };



       const getMostPopular = async () => {
         try {
           const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`);

           if (response) {
             const result = await response.json();
             const mostPopularResult = result.results;
             setMostPopularMovies(mostPopularResult);
           }
         } catch (error) {
           console.error(error);
         }
       };


    return(
        <MovieContext.Provider value={{upcomingMovies, setUpcomingMovies, topRankedMovies, setTopRankedMovies, mostPopularMovies, setTopRankedMovies, movieId, setMovieId, getMostPopular: getMostPopular, getUpcomingMovies: getUpcomingMovies, getTopRankedMovies: getTopRankedMovies}}>
            {props.children}
            </MovieContext.Provider>
    )

}
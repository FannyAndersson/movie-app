import React, { useState, useContext, createContext, useEffect } from 'react';
import { AuthContext } from './AuthContext.jsx';
import { MovieContext } from './MovieContext';
import axios from 'axios';



export const ListContext = createContext();

export const ListProvider = (props) => {
    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);
    console.log(accountId, 'accountList')

    const [nameOfList, setNameOfList] = useState('');

    const [description, setDescription] = useState('');

    const [movieId, setMovieId] = useContext(MovieContext);
    console.log(movieId, 'movieIDLIST')

    const [listId, setListId] = useState(null);

    const [addMessageFavSuccess, setAddMessageFavSuccess] = useState(false);

    const [addMessageWatchSuccess, setAddMessageWatchSuccess] = useState(false);

    const [favoriteMovie, setFavoriteMovie] = useState('');

    const [watchlistMovie, setWatchlistMovie] = useState('');

    const createList = async () => {
      try {
        const addBody =
        {   name: nameOfList,
            description: description,
            language: 'en'
        };
        const response = await fetch(
          `https://api.themoviedb.org/3/list?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`,
          {
            method: 'POST',
            body: JSON.stringify(addBody),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.ok) {
        const result = await response.json()
        setListId(result.list_id)

        }
      } catch (error) {
        console.log('Error:', error);
      }
    };



    const addToFavorite = async () => {
      try {
        const addBody = { media_type: 'movie', media_id: movieId, favorite: true };
        const response = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`,
          {
            method: 'POST',
            body: JSON.stringify(addBody),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
          if (response.ok) {
            console.log(response.json(), 'favlist');
          setAddMessageFavSuccess(true);

        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    const addToWatchList = async () => {
      try {
        const addBody = { media_type: 'movie', media_id: movieId, watchlist: true };
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`,
          {
            method: 'POST',
            body: JSON.stringify(addBody),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.ok) {
          setAddMessageWatchSuccess(true);
          console.log(response.json(), 'watchlist');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };


        const getFavorite = async () => {
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`
            );
            console.log(response, 'resp');

            if (response) {
              const result = await response.json();
              setFavoriteMovie(result.results)
              console.log('fresultFAV', result.results);
            }
          } catch (error) {
            console.error(error);
          }
        };


        const getWatchlist = async () => {
          try {
            const response = await fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`);
            console.log(response, 'resp');

            if (response) {
              const result = await response.json();
              setWatchlistMovie(result.results);
              console.log('fresultWATCH', result);
            }
          } catch (error) {
            console.error(error);
          }
        };

        const removeFromFavorite = async () => {
          try {
            const addBody = { media_type: 'movie', media_id: movieId, favorite: false };
            const response = await fetch(
              `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`,
              {
                method: 'POST',
                body: JSON.stringify(addBody),
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );
                console.log(response, 'RESREMOV')
            if (response.ok) {
              console.log(response.json(), 'REMOVEfavlist');

            }
          } catch (error) {
            console.log('Error:', error);
          }
        };

        const removeFromWatchList = async () => {
          try {
            const addBody = { media_type: 'movie', media_id: movieId, watchlist: false };
            const response = await fetch(
              `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`,
              {
                method: 'POST',
                body: JSON.stringify(addBody),
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );
            console.log(response, 'RESREMOVWATCh');
            if (response.ok) {
              console.log(response.json(), 'REMOVEWat hist');
            }
          } catch (error) {
            console.log('Error:', error);
          }
        };



    return(
        <ListContext.Provider value={{addToFavorite: addToFavorite, getFavorite: getFavorite, createList: createList, addToWatchList: addToWatchList, getWatchlist:getWatchlist, removeFromFavorite: removeFromFavorite, removeFromWatchList: removeFromWatchList, favoriteMovie, setFavoriteMovie, watchlistMovie, setWatchlistMovie, nameOfList, setNameOfList, description, setDescription, addMessageFavSuccess, addMessageWatchSuccess}}>
            {props.children}
        </ListContext.Provider>
    )

}
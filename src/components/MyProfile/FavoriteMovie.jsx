import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieContext } from '../MovieContext';
import { ListContext } from '../ListContext.jsx';


const FavoriteMovie = (movie) => {



     const {movieId, setMovieId} = useContext(MovieContext);
     console.log(movieId, 'movieINFOMOVIEID');

     const { createList, getFavorite, removeFromFavorite, nameOfList, setNameOfList, description, setDescription, getWatchlist, favoriteMovie, setFavoriteMovie, watchlistMovie } = useContext(ListContext);


    const deleteMovieFromList = (e) => {
      e.preventDefault();
      setMovieId(movie.favorite.id)
      console.log(movie.favorite.id)
      removeFromFavorite();
       setTimeout(() => {
         return getFavorite();
       })
    };

    return <div className="list-div">
        <img style={{ width: '70px', height: '70px', objectFit: 'cover' }} alt="" src={`https://image.tmdb.org/t/p/w185${movie.favorite.poster_path}`} />
        <span>{movie.favorite.title}</span>
        <FontAwesomeIcon onClick={deleteMovieFromList} icon="trash-alt" />
      </div>;
}


export default FavoriteMovie;

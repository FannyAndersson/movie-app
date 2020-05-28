import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieContext } from '../MovieContext';
import { ListContext } from '../ListContext.jsx';




const WatchMovie = (movie) => {

    console.log(movie, 'props');

const [movieId, setMovieId] = useContext(MovieContext);

const { createList, getFavorite, removeFromFavorite, removeFromWatchList, nameOfList, setNameOfList, description, setDescription, getWatchlist, favoriteMovie, setFavoriteMovie, watchlistMovie } = useContext(ListContext);


const deleteMovieFromList = e => {
  e.preventDefault();
  setMovieId(movie.watch.id);
  console.log(movie.watch.id);
  removeFromWatchList();
  setTimeout(() => {
   return getWatchlist();
  });
};

    return(
        <div className="list-div">
            <img style={{ width: '70px', height: '70px', objectFit: 'cover' }} alt="" src={`https://image.tmdb.org/t/p/w185${movie.watch.poster_path}`} />
                        <span>
                          {movie.watch.title}
                        </span>
                        <FontAwesomeIcon onClick={deleteMovieFromList} icon="trash-alt" />
        </div>
    )
}


export default WatchMovie;
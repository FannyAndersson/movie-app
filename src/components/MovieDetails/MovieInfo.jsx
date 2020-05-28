import React, {useEffect, useContext, useState} from 'react';
import { Row } from 'reactstrap';
import SimilarMovies from './SimilarMovies'
import Reviews from './Reviews'
import Cast from './Cast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../AuthContext.jsx';
import { MovieContext } from '../MovieContext';
import { ListContext } from '../ListContext';


const MovieInfo = (props) => {
    const [movieInfo, setMovieInfo] = useState('');
    const params = props.match.params;

  const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);

  const [movieId, setMovieId] = useContext(MovieContext);
  console.log(movieId, 'movieINFOMOVIEID')

  const { addToFavorite, addMessageFavSuccess, addToWatchList, addMessageWatchSuccess } = useContext(ListContext);

    const [releaseYear, setReleaseYear] = useState('');

    const [notLoggedInMessage, setNotLoggedInMessage, ] = useState(false);

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US`)

          if (response) {
            const result = await response.json();
            console.log('rrrrr', result)
            setMovieInfo(result);
            let releaseDate = result.release_date.slice(0, 4);
            setReleaseYear(releaseDate);
             setMovieId(params.id);

          }
        } catch (error) {
          console.error(error);
        }
      };
      getMovieDetails();
      window.scrollTo(0, 0);
    }, [params.id]);

    const setAddToWatchlist = () => {
      const storageSession = localStorage.getItem('session');
      if (sessionId === storageSession) {
        addToWatchList();
      } else {
        setNotLoggedInMessage(true);
      }
    }

    const setAddFavorite = () => {
      const storageSession = localStorage.getItem('session');
      if(sessionId === storageSession){
      addToFavorite();
      } else {
        setNotLoggedInMessage(true);
      }

    }

    const genres = movieInfo.genres;

    return <div>
        {!movieInfo ? <p>
            Loading movie
          </p> : <section className="movie-info-section" style={{ backgroundImage: `linear-gradient(to left, rgba(0,0, 0, 0.2) 0%, rgba(0,0, 0, 0.5) 40%, rgba(0, 0, 0, 1) 100%),url(http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})` }}>
            <div className="info-wrapper">
              <Row>
                {movieInfo.title === movieInfo.original_title ? <h1>
                    <h1 className="movieinfo-title">{movieInfo.title}</h1>
                  </h1> : <Row>
                    <h1 className="movieinfo-title">{movieInfo.title}</h1>
                    <p className="original-title">
                      {movieInfo.original_title}(original title)
                    </p>
                  </Row>}
                <p className="release-year">({releaseYear})</p>
              </Row>
              <p className="runtime">{movieInfo.runtime} min</p>
              <div className="genres">
                {genres ? genres.map(genre => {
                    return <span key={genre.id}>{genre.name}</span>;
                  }) : null}
              </div>
              <div className="vote-div">
                <FontAwesomeIcon icon="star" />
                <p className="vote-average">{movieInfo.vote_average}</p>
              </div>
              {addMessageFavSuccess ? <div className="speech-bubble-wrapper">
                  <div className="speech-bubble">
                    The movie has been added to your favorite list
                  </div>
                </div> : null}
              {notLoggedInMessage ? <div className="speech-bubble-wrapper">
                  <div className="speech-bubble">
                    You are not logged in. Please login to save to your list
                  </div>
                </div> : null}
              <div className="add-to-list">
                <FontAwesomeIcon className="icon-heart" icon="heart" />
                <button onClick={setAddFavorite}>Add to favorite</button>
              </div>
              {addMessageWatchSuccess ? <div className="speech-bubble-wrapper">
                  <div className="speech-bubble">
                    The movie has been added to your watchlist
                  </div>
                </div> : null}
              {notLoggedInMessage ? <div className="speech-bubble-wrapper">
                  <div className="speech-bubble">
                    You are not logged in. Please login to save to your list
                  </div>
                </div> : null}
              <div className="add-to-list">
                <FontAwesomeIcon className="icon-eye" icon="eye" />
                <button onClick={setAddToWatchlist}>
                  Add to watchlist
                </button>
              </div>
            </div>
          </section>}
        <div className="overview"> {movieInfo.overview}</div>
        <div className="lang-date">
          <p>
            Language: <span>
              {movieInfo.original_language === 'en' ? (
                'English'
              ) : (
                movieInfo.original_language
              )}
            </span>
          </p>
          <p>Release date: {movieInfo.release_date}</p>
        </div>
        <Cast id={params.id} />
        <Reviews id={params.id} />
        <SimilarMovies props={props} />
      </div>;

}

export default MovieInfo;
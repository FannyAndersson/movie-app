import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const SearchResult = ({props}) => {
    const movieQuery = props;
console.log('samfmasmfmasf ', movieQuery)
    const [resultOfSearch, setResultOfSearch] = useState('');


    useEffect(() => {
      const getSearchResult = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&query=${movieQuery}&page=1&include_adult=false`);

          if (response) {
            const result = await response.json();
            setResultOfSearch(result.results);

          }
        } catch (error) {
          console.error(error);
        }
      };
      getSearchResult();
    }, [movieQuery]);

    return <div>
        {resultOfSearch ? <h1>Results for "{movieQuery}"</h1> : null }
        {resultOfSearch ? resultOfSearch.map(movie => {
            console.log(movie, 'movie')
              return (
                <div className="movie-info-wrapper" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    {' '}
                    <img
                      alt=""
                      src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                    />
                  </Link>
                  <div className="movie-info-div">
                    <h4>{movie.title}</h4>
                    <p className="movie-info">{movie.release_date}</p>
                    <p className="movie-info">{movie.vote_average}</p>
                    <p className="movie-info-overview">
                      {movie.overview.slice(0, 200) + '...'}
                      <Link to={`/movie/${movie.id}`}>Läs mer</Link>
                    </p>
                  </div>
                </div>
              );
            }) : null}
        <div className="show-more-movies-wrapper">
          {/* <span className="show-more-movies-link" onClick={handleClick}>
            Show more movies
          </span> */}
        </div>
      </div>;
}


export default SearchResult;

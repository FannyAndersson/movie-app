import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const MovieList = (props) => {


 const [moviesToRender, setMoviesToRender] = useState(8);

 const handleClick = () => {
   setMoviesToRender(moviesToRender + 4);
 };

    return(
         <div>
      {props.props ? props.props.slice(0, moviesToRender)
          .map((movie, index) => {
            return <div className="movie-info-wrapper" key={index}>
                <Link to={`/movie/${movie.id}`}>
                  {' '}
                  <img alt="" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                </Link>
                <div className="movie-info-div">
                  <h4>{movie.title}</h4>
                  <p className="movie-info">{movie.release_date}</p>
                  <p className="movie-info">{movie.vote_average}</p>
                  <p className="movie-info-overview">
                    {movie.overview.slice(0, 200) + '...'}
                    <Link to={`/movie/${movie.id}`}>Read more</Link>
                  </p>
                </div>
              </div>;
          }) : null}
      <div className="show-more-movies-wrapper">
        <span className="show-more-movies-link" onClick={handleClick}>
            Show more movies
        </span>
      </div>
    </div>
    )
}

export default MovieList;
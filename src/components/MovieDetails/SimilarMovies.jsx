import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const SimilarMovies = ({props}) => {
   const history = useHistory();

  const params = props.match.params
  //  const { props: { match: { params } } } = props;

  const [similarMovies, setSimilarMovies] = useState('');

  const [similarMoviesToRender, setSimilarMoviesToRender] = useState(4);

  useEffect(() => {
    const getSimilarMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}/similar?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1`);

        if (response) {
          const result = await response.json();
          setSimilarMovies(result.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSimilarMovies();
  }, [props.match.params.id]);

  const handleClick = () => {
    setSimilarMoviesToRender(similarMoviesToRender + 4);
  };


  return <div>
       {similarMovies.length === 0 ? null : <h1 className="similar-movies-title">
          Similar Movies
        </h1>}
      {similarMovies ? similarMovies.slice(0, similarMoviesToRender).map(movie => {
          return <div className="movie-info-wrapper" key={movie.id}>
              <div onClick={() => history.push(`/movie/${movie.id}`)} className="movie-link">
                <img alt="" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
              </div>
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
         {similarMovies.length === 0 ? null :
      <div className="show-more-movies-wrapper">
        <span className="show-more-movies-link" onClick={handleClick}>
          Show more movies
        </span>
      </div>
        }
    </div>;
};

export default SimilarMovies;

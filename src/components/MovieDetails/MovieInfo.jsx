import React, {useEffect, useContext, useState} from 'react';
import { Row } from 'reactstrap';
import SimilarMovies from './SimilarMovies'
import Reviews from './Reviews'
import Cast from './Cast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieInfo = (props) => {
    const [movieInfo, setMovieInfo] = useState('');
    const params = props.match.params;
  console.log(params, 'det')

    const [releaseYear, setReleaseYear] = useState('');

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US`)
          console.log(response, 'resp')

          if (response) {
            const result = await response.json();
            console.log('rrrrr', result)
            setMovieInfo(result);
            let releaseDate = result.release_date.slice(0, 4);
            setReleaseYear(releaseDate);


          }
        } catch (error) {
          console.error(error);
        }
      };
      getMovieDetails();
      window.scrollTo(0, 0);
    }, [params.id]);


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
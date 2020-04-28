import React, {useEffect, useContext, useState} from 'react';
import{ MovieContext } from '../MovieContext';
import { Row } from 'reactstrap';


const MovieInfo = () => {

    const [movieInfo, setMovieInfo] = useState('');
    console.log(movieInfo, 'info');

    const [releaseYear, setReleaseYear] = useState('');

    const context = useContext(MovieContext);


    useEffect(() => {
    const [data] = context;
      const getMovieDetails = async () => {
    console.log(data.id, 'data');
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${data.id}?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US`)
          console.log(response, 'resp')

          if (response) {
            const result = await response.json();
            setMovieInfo(result);
            let releaseDate = data.release_date.slice(0, 4);
            setReleaseYear(releaseDate);


          }
        } catch (error) {
          console.error(error);
        }
      };
      getMovieDetails();
    }, []);


    const genres = movieInfo.genres;
    console.log(genres)


    return <div>
        {!movieInfo ? <p>Loading movie</p> :
        <section className="movie-info-section" style={{ backgroundImage: `linear-gradient(to left, rgba(0,0, 0, 0.2) 0%, rgba(0,0, 0, 0.5) 40%, rgba(0, 0, 0, 1) 100%),url(http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})` }}>
          <div className="info-wrapper">
            <Row>
              <h1>{movieInfo.title}</h1>
              <span>({releaseYear})</span>
            </Row>
            <p>{movieInfo.original_title}(orginaltitel)</p>
            <p>{movieInfo.runtime} min</p>
            <div className="genres">
              {genres ? genres.map(genre => {
                  return <span key={genre.id}>{genre.name}</span>;
                }) : null}
            </div>
            <p>{movieInfo.vote_average}</p>
          </div>
        </section>}
        <div> {movieInfo.overview}</div>
        <div>
          <p>
            Språk: <span>
              {movieInfo.original_language === 'en' ? 'Engelska' : movieInfo.original_language}
            </span>
          </p>
          <p>Utgivningsdatum: {movieInfo.release_date}</p>
        </div>
      </div>

}

export default MovieInfo;
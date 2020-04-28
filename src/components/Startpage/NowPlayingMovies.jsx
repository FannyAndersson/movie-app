import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../MovieContext';




const NowPlayingMovies = () => {

    const context = useContext(MovieContext);
    const [data] = context;

  // useEffect(() => {
  //   const getNowPlaying = async () => {
  //     try {
  //       const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1');


  //       if (response) {
  //         const result = await response.json();

  //         if (response.ok) {
  //           const keys = result.results;
  //           const movie = keys[Math.floor(Math.random() * keys.length)];
  //           console.log(movie, 'mvie')
  //           setMoviePlayingNow(movie);
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getNowPlaying();
  // }, []);



    return <React.Fragment>
        <section className="now-playing-section" style={{ backgroundImage: `linear-gradient(to left, rgba(0,0, 0, 0.2) 0%, rgba(0,0, 0, 0.5) 40%, rgba(0, 0, 0, 1) 100%),url(http://image.tmdb.org/t/p/original/${data.backdrop_path})` }}>
          <div className="now-playing-info">
            <h1>Nu på bio</h1>
            <p>{data.title}</p>
          </div>
          <Link to={`/movie/${data.id}`} className="no-dec">
            {' '}
            <span>Läs mer</span>
          </Link>
        </section>
      </React.Fragment>;



}


export default NowPlayingMovies;
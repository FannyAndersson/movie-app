import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';




const NowPlayingMovies = () => {

 const [moviePlayingNow, setMoviePlayingNow] = useState([]);

 const [input, setInput] = useState('');

 useEffect(() => {
   const getNowPlaying = async () => {
     try {
       const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1');

       if (response) {
         const result = await response.json();
         console.log(result)

         if (response.ok) {
           const keys = result.results;
           const movie = keys[Math.floor(Math.random() * keys.length)];
           setMoviePlayingNow(movie);
         }
       }
     } catch (error) {
       console.error(error);
     }
   };
   getNowPlaying();
 }, []);


    return <React.Fragment>
        <section className="now-playing-section" style={{ backgroundImage: `linear-gradient(to left, rgba(0,0, 0, 0.2) 0%, rgba(0,0, 0, 0.5) 40%, rgba(0, 0, 0, 1) 100%),url(http://image.tmdb.org/t/p/original/${moviePlayingNow.backdrop_path})` }}>
          <div className="now-playing-info">
            <h2>In cinemas -</h2>
            <p>{moviePlayingNow.title}</p>
          <Link to={`/movie/${moviePlayingNow.id}`} className="no-dec">
            {' '}
            <span>Read more</span>
          </Link>
          </div>
        </section>
      </React.Fragment>;



}


export default NowPlayingMovies;
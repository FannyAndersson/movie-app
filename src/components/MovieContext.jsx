import React, {useState, createContext, useEffect} from 'react';

// context

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [moviePlayingNow, setMoviePlayingNow] = useState([]);
    console.log(moviePlayingNow, 'lfpåeofkej')

    const [input, setInput] = useState('')


    // hämta nowplaying, latest movies, most popular

    useEffect(() => {
      const getNowPlaying = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=404c9d315cf694929f8ad3227b130aab&language=en-US&page=1');

          if (response) {
            const result = await response.json();

            if (response.ok) {
              const keys = result.results;
              const movie = keys[Math.floor(Math.random() * keys.length)];
              console.log(movie, 'mvie');
              setMoviePlayingNow(movie);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      getNowPlaying();
    }, []);




    return(
        <MovieContext.Provider value={[moviePlayingNow, setMoviePlayingNow]}>
            {props.children}
        </MovieContext.Provider>
    )
}

// export const MovieContext = createContext();

// export const MovieProvider = (props) => {
//     const[movies, setMovies] = useState([
//         {
//             name: 'Harry Potter',
//             price: '100 sek',
//             id: 4232
//         },
//         {
//             name: 'Game of thrones',
//             price: '1000 sek',
//             id: 4232324
//         },
//         {
//             name: 'Harry Potter',
//             price: '5100 sek',
//             id: 4232098
//         },
//     ]);
//     return(
//         <MovieContext.Provider value={[movies, setMovies]}>
//             {props.children}
//         </MovieContext.Provider>
//     )
// }
import { useState } from 'react';


const useMovieHook = (callback) => {

const [moviePlayingNow, setMoviePlayingNow] = useState([]);

return {
    moviePlayingNow,
    setMoviePlayingNow
}

}


export default useMovieHook;
import React from 'react';
import { MovieContext } from '../MovieContext';


const Movie = () => {

    const context = useContext(MovieContext);

    return(
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}


export default Movie;

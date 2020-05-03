import React, { useEffect, useContext, useState } from 'react';
import placeholderImage from './person-icon.png';


const Cast = ({id}) => {
  const [castAndCrewInfo, setCastAndCrewInfo] = useState('');


//   const context = useContext(MovieContext);

  useEffect(() => {
    // const [data] = context;
    const getCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=404c9d315cf694929f8ad3227b130aab`
        );

        if (response) {
          const result = await response.json();
          setCastAndCrewInfo(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCast();
  }, []);


  return <div>
      <div className="cast-members">
        {castAndCrewInfo.crew ? castAndCrewInfo.crew.map((crew, index) => {
            return <div key={index}>
                  <div>
                     <span>{crew.job === 'Director' ? <p>Regissör: {crew.name} </p> : null }</span>
                    {/* <p>{cast.character}</p> */}
                  </div>
              </div>;
          }) : null}
      </div>

      <div className="cast-members">
        {castAndCrewInfo.cast ? castAndCrewInfo.cast.map(cast => {
            return <div key={cast.id}>
                <div>
                  {cast.profile_path === null ? <img alt="" src={placeholderImage} /> : <img alt="" src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`} />}
                  <div>
                    <p>{cast.name}</p>
                    <p>{cast.character}</p>
                  </div>
                </div>
              </div>;
          }) : null}
      </div>
    </div>;

}

export default Cast;

import React, { useEffect, useContext, useState } from 'react';
import placeholderImage from './person-icon.png';
import { Container, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const Cast = ({id}) => {
  const [castAndCrewInfo, setCastAndCrewInfo] = useState('');

  const [castToRender, setCastToRender] = useState(3);

  const handleClick = () => {
    setCastToRender(castToRender + 4);
  };
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
  }, [id]);


  return <div>
      <div className="crew-members">
        Director:
        {castAndCrewInfo.crew ? castAndCrewInfo.crew.map((crew, index) => {
            return <div key={index}>
                <div className="director">
                  {crew.job === 'Director' ? <span>{crew.name}, </span> : null}
                </div>
              </div>;
          }) : null}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} className="cast-members">
        {castAndCrewInfo.cast ? castAndCrewInfo.cast
            .slice(0, castToRender)
            .map(cast => {
              return (
                <div key={cast.id}>
                  <div>
                    <Link>
                      {cast.profile_path === null ? (
                        <img
                          style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                          className="no-img"
                          alt=""
                          src={placeholderImage}
                        />
                      ) : (
                        <img
                          style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                          alt=""
                          src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                        />
                      )}
                    </Link>
                    <div className="cast-info">
                      <p>{cast.name}</p>
                      <p>Charachter: {cast.character}</p>
                    </div>
                  </div>
                </div>
              );
            }) : null}
      </div>
      <div className="show-more-movies-wrapper">
        <span className="show-more-movies-link" onClick={handleClick}>
          Show more cast
        </span>
      </div>
    </div>;

}

export default Cast;

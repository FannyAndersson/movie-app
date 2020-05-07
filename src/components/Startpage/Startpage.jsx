import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import NowPlayingMovies from './NowPlayingMovies';
import TopRankedMovies from './TopRankedMovies';


const StartPage = () => {


  return (
    <div>
         <NowPlayingMovies />
         <TopRankedMovies />
    </div>
  );
};

export default StartPage;

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../sass/source.scss';
// import { Container, Row, Col } from 'react-bootstrap';

import AddMovie from './AddMovie';
import MostPopular from './MostPopular/MostPopular';
import UpcomingMovies from './UpcomingMovies/UpcomingMovies';
import {MovieProvider} from './MovieContext';
import Header from './Header';
import MovieDetails from './MovieDetails/MovieDetails';
import NowPlayingMovies from './Startpage/NowPlayingMovies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Startpage from './Startpage/Startpage';
// import { useRoutes, A } from 'hookrouter';





console.log(process.env.REACT_APP_TMDB_KEY);



// const routes = {
//   '/movie/:id': ({id}) => <MovieDetails id={id} />,
//   '/latest-movies': ( ) => <MovieList />
// };
// console.log(routes);

function App() {

// const routeResult = useRoutes(routes);



  return <MovieProvider>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Startpage} />
            <Route path="/kommande-filmer" exact component={UpcomingMovies} />
            <Route path="/populara-filmer" exact component={MostPopular} />
            <Route path="/movie/:id" exact component={MovieDetails} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </MovieProvider>;
}


export default App;

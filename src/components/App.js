import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../sass/source.scss';
// import { Container, Row, Col } from 'react-bootstrap';

import AddMovie from './AddMovie';
import MostPopular from './MostPopular/MostPopular';
import UpcomingMovies from './UpcomingMovies/UpcomingMovies';
import { AuthProvider } from './AuthContext';
import Header from './Header';
import MovieInfo from './MovieDetails/MovieInfo';
import NowPlayingMovies from './Startpage/NowPlayingMovies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Startpage from './Startpage/Startpage';
import Login from './Login/Login';
import MyProfile from './MyProfile/MyProfile';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStar, faTrashAlt, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import {Container} from 'reactstrap';
import {ListProvider} from './ListContext';
import SearchResult from './Search/SearchResult';
import Search from './Search/Search';
import {MovieProvider} from './MovieContext';

import SimilarMovies from './MovieDetails/SimilarMovies'
library.add(fab, faStar, faTrashAlt, faHeart, faEye);


console.log(process.env.REACT_APP_TMDB_KEY);



// const routes = {
//   '/movie/:id': ({id}) => <MovieDetails id={id} />,
//   '/latest-movies': ( ) => <MovieList />
// };
// console.log(routes);

function App() {


// const routeResult = useRoutes(routes);



  return <AuthProvider>
        <MovieProvider>
      <ListProvider>
        {/* <SearchProvider> */}
        <BrowserRouter>
          <React.Fragment>
            <Header />
              {/* <SearchResult /> */}
            <Switch>
              <div>
                {/* <Route path="/search" exact component={SearchResult} /> */}
                <Route path="/" exact component={Startpage} />
                <Route path="/upcoming-movies" exact component={UpcomingMovies} />
                <Route path="/popular-movies" exact component={MostPopular} />
                <Route path="/movie/:id" exact component={MovieInfo} />
                {/* <Route path='/movie/:id' component={SimilarMovies} /> */}
                <Route path="/my-profile" exact component={MyProfile} />
                <Route path="/login" exact component={Login} />
              </div>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
        {/* </SearchProvider> */}
      </ListProvider>
        </MovieProvider>
    </AuthProvider>;
}


export default App;

import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';
import Logout from './Logout/Logout';


const NavBar = () => {

  const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);


  const isAuthenticated = localStorage.getItem("session");



    return <div>
        <nav>
          <ul className="navbar-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upcoming-movies">Upcoming movies</Link>
            </li>
            <li>
              <Link to="/popular-movies">Pupular movies</Link>
            </li>
            {sessionId ? <li>
                <Link to="/my-profile" >My profile</Link></li> : null }
            {sessionId ? <li>
                <Logout /> </li>
               : <li>
                <Link to="/login">Login</Link>
              </li>}
          </ul>
        </nav>
      </div>;
}

export default NavBar;
import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';
import Logout from './Logout/Logout';


const NavBar = () => {

  const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);
  console.log('am i activated', activateUser);
  console.log('do I have a sessionId', sessionId);

   //fetch two localstorage values below to re-validate/re-hydrate the app.
  //The values are as expected, but I'm being kicked back to login page
  const isAuthenticated = localStorage.getItem("session");

  useEffect(() => {

  }, [isAuthenticated])

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
            {isAuthenticated ? <li>
                <Link to="/my-profile">My profile</Link>
                <Logout />
              </li> : <li>
                <Link to="/login">Login</Link>
              </li>}
          </ul>
        </nav>
      </div>;
}

export default NavBar;
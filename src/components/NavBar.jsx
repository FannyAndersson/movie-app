import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';
import Logout from './Logout/Logout';


const NavBar = () => {

  const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);
  console.log(activateUser);

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
            {activateUser === true ? <li>
                <Link to="/my-profile">My profile</Link>
              </li> : null}
            {activateUser === true ? <Logout /> : <li>
                <Link to="/login">Login</Link>
              </li>}
          </ul>
        </nav>
      </div>;
}

export default NavBar;
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div>
          <nav>
            <ul className="navbar-ul">
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/kommande-filmer">Kommande filmer</Link>
              </li>
              <li>
                <Link to="/populara-filmer">Populäraste filmer</Link>
              </li>
              <li>
                <Link to="/logga-in">Logga in</Link>
              </li>
            </ul>
          </nav>
        </div>
)
}

export default NavBar;
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext.jsx';




const Logout = () => {

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);
    console.log(sessionId, 'sessionid');

    const logout = async () => {
      await axios({
        method: 'delete',
        url:
          'https://api.themoviedb.org/3/authentication/session?api_key=404c9d315cf694929f8ad3227b130aab',
        data: {
          session_id: sessionId
        }
      })
        .then(response => setSessionId(null), setActivateUser(false))
        .catch(error => console.log(error));
    };

    const handleSubmit = () => {
        logout();
    }

    return(
             <li>
                <Link onClick={handleSubmit} to="/">Logout</Link>
              </li>
    )
}


export default Logout;
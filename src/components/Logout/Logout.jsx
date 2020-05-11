import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';


const Logout = () => {

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);
    console.log(sessionId, 'sessionid');

    const logout = async () => {
     try {
       const addBody = {
                     session_id: sessionId
                   };
       const response = await fetch('https://api.themoviedb.org/3/authentication/session?api_key=404c9d315cf694929f8ad3227b130aab', {
         method: 'delete',
         body: JSON.stringify(addBody),
         headers: {
           'Content-Type': 'application/json'
         }
       });

       if (response.ok) {
           localStorage.clear();
           setSessionId(null);
           setActivateUser(false);
       }
     } catch (error) {
       console.error('Error:', error);
     }
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
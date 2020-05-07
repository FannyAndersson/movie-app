import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../AuthContext.jsx';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Login = () => {

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);
    console.log(activateUser)

    const [activateLoginForm, setActivateLoginForm] = useState(false);

    const login = async () => {
      await axios({
        method: 'post',
        url:
          'https://api.themoviedb.org/3/authentication/session/new?api_key=404c9d315cf694929f8ad3227b130aab',
        data: {
          request_token: requestToken
        }
      })
        .then(response => setSessionId(response.data.session_id))
        .catch(error => console.log(error));
    };

     const approve = () => {
       window.open(`https://www.themoviedb.org/authenticate/${requestToken}`, '_blank');
    setActivateLoginForm(true)
     };
    // const [requestToken, setRequestToken] = useState(null)
    //         console.log(requestToken)

    // const [activateUser, setActivateUser] = useState(false)

    // const [sessionId, setSessionId] = useState(null)
    // console.log(sessionId)

    // const [acountId, setAcountId] = useState(null);

    // useEffect(() => {
    //   const getRequestToken = async () => {
    //     try {
    //       const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=404c9d315cf694929f8ad3227b130aab`);
    //       if (response) {
    //         const result = await response.json();
    //         setRequestToken(result.request_token);
    //         console.log(result)
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   getRequestToken();
    // }, []);

    // const approve = () => {
    //     window.open(`https://www.themoviedb.org/authenticate/${requestToken}`, '_blank');
    //     setActivateUser(true);
    // }

    // const login = async () => {
    //   await axios({
    //     method: 'post',
    //     url:
    //       'https://api.themoviedb.org/3/authentication/session/new?api_key=404c9d315cf694929f8ad3227b130aab',
    //     data: {
    //       request_token: requestToken
    //     }
    //   })
    //     .then(response => setSessionId(response.data.session_id))
    //     .catch(error => console.log(error, 'hits'))
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        setActivateUser(true);
    }

    return <div>
         <p>Active your acount</p>
        <span onClick={approve}>Get token</span>
        {activateLoginForm === true ?
        <div className="login-input">
          <p>Your token is {requestToken}</p>
          <p>Login with your token</p>
           <form onSubmit={handleSubmit}>
            <input type="text" style={{ width: '60%' }} value={requestToken} onChange={e => setRequestToken(
                  { token: e.target.value }
                )} />
           <button type="submit">Login</button>
          </form>
          :
          {/* {this.state.errorTokenActivation ? <p>The token has not been activated or has expired.<br />
                        Please request a new token and try again.</p> : null}
                    {this.state.errorNoAccount ? "No account found. Please register." : null} */}
         </div>
         : null }
      </div>;
}


export default Login;
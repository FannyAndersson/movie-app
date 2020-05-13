import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../AuthContext.jsx';
import {
  useHistory,
} from 'react-router-dom';


const Login = () => {

    const history = useHistory();

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);
    console.log('sessionId', sessionId)

    const [activateLoginForm, setActivateLoginForm] = useState(false);


  useEffect(() => {
    login();
  }, [sessionId])

   const login = async () => {
     try {
       const addBody = {
                     request_token: requestToken
                   };
       const response = await fetch('https://api.themoviedb.org/3/authentication/session/new?api_key=404c9d315cf694929f8ad3227b130aab', {
         method: 'POST',
         body: JSON.stringify(addBody),
         headers: {
           'Content-Type': 'application/json'
         }
       });

       if (response.ok) {
           const result = await response.json()
           const thisSessionId = result.session_id;
            setSessionId(thisSessionId)
            localStorage.setItem('session', thisSessionId);
        try {
        const response = await fetch(
          `https://api.themoviedb.org/3/account?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${thisSessionId}`
        );
        console.log(response, 'resp');

        if (response) {
          const result = await response.json();
            setAccountId(result.id)
          console.log('profile', result.id);
        }
      } catch (error) {
        console.log(error);
      }
       }
     } catch (error) {
       console.log('Error:', error);
     }
   };



     const approve = () => {
       window.open(`https://www.themoviedb.org/authenticate/${requestToken}`, '_blank');
    setActivateLoginForm(true)
     };



    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        setActivateUser(true);
        history.push('/my-profile');
    }

    return <div className="login-wrapper">
    <div className="login-wrapper-div">
        <div className="speech-bubble-wrapper">
        <div className="speech-bubble">
            When you have activated and approved your account please return to this page to login
        </div>
        </div>
        <p>Activate your acount by clicking the link below</p>
        <span onClick={approve}>Active and approve your account</span>

        {activateLoginForm === true ? <div className="login-form-div">
            <p>Your login is: "{requestToken}"</p>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
              <input type="text" style={{ width: '60%' }} value={requestToken} onChange={e => setRequestToken(
                    { token: e.target.value }
                  )} />
              <button type="submit">
                Login
              </button>
            </form>
          </div> : null}
      </div>
      </div>

}


export default Login;
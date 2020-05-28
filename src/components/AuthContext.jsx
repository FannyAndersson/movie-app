import React, {useState, createContext, useEffect} from 'react';


// context

export const AuthContext = createContext();

export const AuthProvider = (props) => {

 const [requestToken, setRequestToken] = useState('');

 const [activateUser, setActivateUser] = useState(false);

 const [sessionId, setSessionId] = useState(null);

 const [accountId, setAccountId] = useState(null);

 const errormsg = () => {
   return <div> Something went wrong. Please try again </div>
 }

 useEffect(() => {
   const getRequestToken = async () => {
     try {
       const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=404c9d315cf694929f8ad3227b130aab`);
       if (response.ok) {
         const result = await response.json();
         setRequestToken(result.request_token);
       }
     } catch (error) {
       errormsg();
     }
   };
   getRequestToken();
 }, []);



    return(
        <AuthContext.Provider value={[sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId]}>
            {props.children}
        </AuthContext.Provider>
    )
}
import React, {useState, createContext, useEffect} from 'react';


// context

export const AuthContext = createContext();

export const AuthProvider = (props) => {

 const [requestToken, setRequestToken] = useState('');
 console.log(requestToken);

 const [activateUser, setActivateUser] = useState(false);
  console.log(activateUser, 'authuseractiv')

 const [sessionId, setSessionId] = useState(null);
 console.log('sessionsnansfnfsanfasnafs', sessionId);


 useEffect(() => {
   const getRequestToken = async () => {
     try {
       const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=404c9d315cf694929f8ad3227b130aab`);
       if (response) {
         const result = await response.json();
         setRequestToken(result.request_token);
         console.log(result);
       }
     } catch (error) {
       console.error(error);
     }
   };
   getRequestToken();
 }, []);



    return(
        <AuthContext.Provider value={[sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken]}>
            {props.children}
        </AuthContext.Provider>
    )
}

// export const MovieContext = createContext();

// export const MovieProvider = (props) => {
//     const[movies, setMovies] = useState([
//         {
//             name: 'Harry Potter',
//             price: '100 sek',
//             id: 4232
//         },
//         {
//             name: 'Game of thrones',
//             price: '1000 sek',
//             id: 4232324
//         },
//         {
//             name: 'Harry Potter',
//             price: '5100 sek',
//             id: 4232098
//         },
//     ]);
//     return(
//         <MovieContext.Provider value={[movies, setMovies]}>
//             {props.children}
//         </MovieContext.Provider>
//     )
// }
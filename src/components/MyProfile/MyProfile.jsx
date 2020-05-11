import React, {useEffect, useContext} from 'react';
import { AuthContext } from '../AuthContext.jsx';


const MyProfile = () => {

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken] = useContext(AuthContext);
    console.log(sessionId, 'ses')

// useEffect(() => {
//   // const [data] = context;
//   const getAccountDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/account?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`
//       );

//       if (response) {
//         const result = await response.json();
//         console.log(result, 'ihh');
//         // setCastAndCrewInfo(result);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getAccountDetails();
// }, []);


    return (
        <div>

            dksj
            </div>
    )
}



export default MyProfile;
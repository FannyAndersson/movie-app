import React, {useEffect, useContext} from 'react';
import { AuthContext } from '../AuthContext.jsx';
import { ListContext } from '../ListContext.jsx';


const MyProfile = () => {

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);
    console.log(sessionId, 'ses')

    const {createList} = useContext(ListContext);

    const handleSubmit = (e) => {
        createList();
        e.preventDefault();
    }

    return (
        <div>
            <form onClick={handleSubmit}>
            <button type="submit">Create list</button>
            </form>
            </div>
    )
}



export default MyProfile;
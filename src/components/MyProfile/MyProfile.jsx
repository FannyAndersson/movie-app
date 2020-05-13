import React, {useEffect, useContext} from 'react';
import { AuthContext } from '../AuthContext.jsx';
import { ListContext } from '../ListContext.jsx';


const MyProfile = () => {

    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);
    console.log(sessionId, 'ses')

    const {createList, nameOfList, setNameOfList, description, setDescription} = useContext(ListContext);

    const setList = e => {
        setNameOfList(e.target.value)
    }

    const setDescriptionValue = e => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        createList();
        e.preventDefault();
    }

    return <div>
        <form onClick={handleSubmit}>
          <input type="text" name="inputName" value={nameOfList} onChange={setList} />
          <textarea type="text" value={description} onChange={setDescriptionValue} />
          <button type="submit">Create list</button>
        </form>
      </div>;
}



export default MyProfile;
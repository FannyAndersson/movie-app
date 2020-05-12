import React, { useState, useContext, createContext, useEffect } from 'react';
import { AuthContext } from './AuthContext.jsx';


export const ListContext = createContext();

export const ListProvider = (props) => {
    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);

    const [inputName, setInputName] = useState('');

    const [description, setDescription] = useState('');

    const [listId, setListId] = useState(null);
    console.log('listId', listId);

    const createList = async () => {
      try {
        const addBody =
        {   name: 'My favourite movies',
            description: 'List of my favourite movies',
            language: 'en'
        };
        const response = await fetch(
          `https://api.themoviedb.org/3/list?api_key=404c9d315cf694929f8ad3227b130aab&session_id=${sessionId}`,
          {
            method: 'POST',
            body: JSON.stringify(addBody),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.ok) {
        const result = await response.json()
        setListId(result.list_id)
          console.log(result.list_id)
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };


    return(
        <ListContext.Provider value={{createList: createList, inputName, setInputName, description, setDescription}}>
            {props.children}
        </ListContext.Provider>
    )

}
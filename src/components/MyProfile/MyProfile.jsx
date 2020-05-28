import React, {useEffect, useContext, useState} from 'react';
import { AuthContext } from '../AuthContext';
import { ListContext } from '../ListContext';
import {Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteMovie from './FavoriteMovie';
import WatchMovie from './WatchMovie';




const MyProfile = () => {



    const [sessionId, setSessionId, activateUser, setActivateUser, requestToken, setRequestToken, accountId, setAccountId] = useContext(AuthContext);
    console.log(sessionId, 'ses')

    const { createList, getFavorite, removeFromFavorite, nameOfList, setNameOfList, description, setDescription, getWatchlist, favoriteMovie, setFavoriteMovie, watchlistMovie } = useContext(ListContext);
    console.log(watchlistMovie, 'mapmappmap');


    const setList = e => {
        setNameOfList(e.target.value)
        console.log(e, 'profilenamelist')
    }

    const setDescriptionValue = e => {
        setDescription(e.target.value)
    }

     useEffect(() => {
       getFavorite();
       getWatchlist();
     }, []);




    return <div>
        <Row>
          <Col className="list-col">
            <h4>My favorite movies</h4>
            <div className="list-wrapper">
            {favoriteMovie ? favoriteMovie.map((movie, index) => {
                return(
                    <FavoriteMovie favorite={movie}/>
                )
            }) : null }
            </div>
          </Col>
          <Col className="list-col">
            <h4>My watchlist</h4>
            <div className="list-wrapper">
                {watchlistMovie ? watchlistMovie.map((movie, index) => {
                    return (
                        <WatchMovie watch={movie} />
                    )


                }) : null }
                </div>
          </Col>
        </Row>
        {/* <form>
          <input type="text" name="inputName" value={nameOfList} onChange={setList} />
          <textarea type="text" value={description} onChange={setDescriptionValue} />
          <button type="submit" onClick={handleSubmit}>
            Create list
          </button>
        </form>
        <span>{nameOfList}</span>
        <span>{description}</span> */}
      </div>;
}



export default MyProfile;
import React, {useState, useEffect} from 'react';

const Search = () => {

    const [input, setInput] = useState('');



    return <form className="search-wrapper">
        <input type="text" />
        <button type="submit" className="btn search-btn">
          Sök
        </button>
      </form>;
}


export default Search;
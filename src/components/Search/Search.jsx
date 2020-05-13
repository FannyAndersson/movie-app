import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';

const Search = () => {
  const [movieQuery, setMovieQuery] = useState('');
  console.log(movieQuery);

  const getMovieQuery = e => {
    setMovieQuery(e.target.value);
  };

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
  };

  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        name="movieQuery"
        value={movieQuery}
        onChange={getMovieQuery}
      />

      <button type="submit" className="btn search-btn">
        Sök
      </button>

      <div>
        <SearchResult props={movieQuery} />
      </div>
    </form>
  );
};

export default Search;

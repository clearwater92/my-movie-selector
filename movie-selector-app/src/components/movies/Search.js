import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { searchMovies } from '../../modules/movie';
import MovieList from './MovieList';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { searchedMovies } = useSelector(state => ({
    searchedMovies: state.movies,
  }));

  const search = () => {
    dispatch(searchMovies(searchTerm));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      searchMovies(searchTerm);
      search();
      setSearchTerm('');
    }
  };

  const onChangeHandle = (e) => {
    setSearchTerm(e.target.value);
  };

  let searchedFlag = _.size(searchedMovies) > 0 ? true : false;
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="search"
          value={searchTerm}
					onChange={onChangeHandle}
					placeholder="Search movies..."
        />
      </form>
      {searchedFlag && <MovieList movies={searchedMovies} />}
    </>
  );
};

export default Search;

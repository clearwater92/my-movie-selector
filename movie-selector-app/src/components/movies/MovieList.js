import _ from 'lodash';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Movie from './Movie';
import { fetchWishList } from '../../modules/movie';

const MovieList = (props) => {
  let movies = props.movies;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    dispatch(fetchWishList());
  };

  return (
    <>
      <div className="movie-container">
        {_.map(movies, (movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;

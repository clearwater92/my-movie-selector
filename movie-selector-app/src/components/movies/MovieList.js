import _ from 'lodash';
import Movie from './Movie';

const MovieList = (props) => {
  let movies = props.movies;
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

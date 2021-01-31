import { useState, useEffect } from 'react';
import { FEATURED_API } from '../../constants';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      });
  }, []);
	console.log(props)
  console.log(movies);
  return (
    <>
      {/* <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div> */}
    </>
  );
};

const Movie = ({ title }) => {
  <div className="movie">{title}</div>;
};

export default MovieList;

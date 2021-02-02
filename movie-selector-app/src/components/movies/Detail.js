import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL, IMAGE_NOT_PREPARED } from '../../constants';

const Detail = (props) => {
  const { movies } = useSelector((state) => ({
    movies: state.movies,
  }));
  console.log(props.match.params.id);
  const movie = movies[props.match.params.id];
  console.log(movie);
  return (
    <div className="detail">
      <img
        alt={movie.original_title}
        src={
          movie.backdrop_path
            ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
            : IMAGE_NOT_PREPARED
        }
      />
      <div className="movie-info">
        <h3>{movie.original_title}</h3>
				<h5>{movie.overview}</h5>
      </div>
    </div>
  );
};

export default Detail;

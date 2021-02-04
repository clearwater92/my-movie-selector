import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL, IMAGE_NOT_PREPARED } from '../../constants';

const Detail = (props) => {
  const { movies } = useSelector((state) => ({
    movies: state.movies,
  }));
  const movie = movies[props.match.params.id];

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };
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
      <div className="movie-detail">
        <div className="movie-detail__title">{movie.original_title}</div>
        <div className="movie-detail__release">{movie.release_date}</div>
        <p className="movie-detail__overview">{movie.overview}</p>
        <FaArrowAltCircleLeft
          className={`back ${setVoteClass(movie.vote_average)}`}
          onClick={props.history.goBack}
        />
        <span className={`tag ${setVoteClass(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
    </div>
  );
};

export default Detail;

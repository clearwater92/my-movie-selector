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

  const createScroll = (string) => {
    if (string > 400) {
      return true;
    }
    return false;
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
        <p
          className={`movie-detail__overview ${
            createScroll(movie.overview.length) ? 'scroll' : ''
          }`}
        >
          {movie.overview}
        </p>
        <div className="movie-detail__bottom">
          <FaArrowAltCircleLeft
            className={`movie-detail__bottom__left back ${setVoteClass(
              movie.vote_average,
            )}`}
            onClick={props.history.goBack}
          />
          <span
            className={`movie-detail__bottom__right tag ${setVoteClass(
              movie.vote_average,
            )}`}
          >
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;

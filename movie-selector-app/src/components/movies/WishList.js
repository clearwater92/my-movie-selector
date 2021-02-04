import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { FaTrashAlt } from 'react-icons/fa';
import { IMAGE_BASE_URL, IMAGE_NOT_PREPARED } from '../../constants';
import { deleteMovie } from '../../modules/movie';

const WishList = (props) => {
  let movies = props.movies;
  return (
    <>
      <div className="movie-container">
        {_.map(movies, (movie) => (
          <Wish key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

const Wish = (props) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(deleteMovie(props.id));
  };

  return (
    <div className="movie">
      <img
        alt={props.original_title}
        src={
          props.backdrop_path
            ? `${IMAGE_BASE_URL}${props.backdrop_path}`
            : IMAGE_NOT_PREPARED
        }
      />
      <div className="movie-info">
        <h3>{props.original_title}</h3>
        <FaTrashAlt className="remove-icon" onClick={remove}>
          Remove
        </FaTrashAlt>
      </div>
    </div>
  );
};

export default WishList;

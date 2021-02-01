import { useSelector, useDispatch } from 'react-redux';
import { likeMovie } from '../../modules/movie';
import { IMAGE_BASE_URL, IMAGE_NOT_PREPARED } from '../../constants';

const Movie = (props) => {
  const { wishList } = useSelector((state) => ({
    wishList: state.wishList,
  }));

  const dispatch = useDispatch();

  const like = () => {
    dispatch(likeMovie(props));
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
        <button onClick={like}>Like</button>
      </div>
    </div>
  );
};

export default Movie;

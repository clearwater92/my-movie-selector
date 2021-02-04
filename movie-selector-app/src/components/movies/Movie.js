import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaHeart } from 'react-icons/fa';
import { likeMovie } from '../../modules/movie';
import { IMAGE_BASE_URL, IMAGE_NOT_PREPARED } from '../../constants';

const Movie = (props) => {

  const { wishList } = useSelector((state) => ({
    wishList: state.wishList,
  }));

  const dispatch = useDispatch();

  const like = () => {
    var result = _.find(wishList, { id: props.id });
    result ?? dispatch(likeMovie(props));
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
        <div className="icon-set">
          <Link to={`/movie/${props.id}`}>
            <FaInfoCircle className="info-icon" />
          </Link>
          <FaHeart className="like-icon" onClick={like} />
        </div>
      </div>
    </div>
  );
};

export default Movie;

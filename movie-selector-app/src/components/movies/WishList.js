import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { fetchWishList } from '../../modules/movie';
import { IMAGE_BASE_URL, IMAGE_NOT_PREPARED } from '../../constants';

const WishList = () => {
  const { movieList } = useSelector((state) => ({
    movieList: state.wishList,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishList());
	}, []);
	


  let wishListFlag = _.size(movieList) > 0 ? true : false;
  console.log('movieList', movieList);
  return (
    <div className="movie-container">
      {wishListFlag && <Wish movieList={movieList} />}
    </div>
  );
};

const Wish = ({ movieList }) => {

	const { list } = useSelector((state) => ({
    list: state.wishList,
  }));
	const remove = () => {
		console.log()
	}

  return (
    <>
      {_.map(movieList, (movie) => (
        <div className="movie" key={movie.id}>
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
            <button onClick={remove}>Remove</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishList;

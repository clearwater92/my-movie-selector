import { useSelector, useDispatch } from 'react-redux';
import _, { upperCase } from 'lodash';
import { fetchWishList } from '../../modules/movie';
import WishList from '../movies/WishList';
import { useEffect } from 'react';

const Storage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch();
  }, []);
  const { movieList } = useSelector((state) => ({
    movieList: state.wishList,
  }));

  const fetch = () => {
    dispatch(fetchWishList());
  };

  let wishListFlag = _.size(movieList) > 0 ? true : false;
  return (
    <>
      <h1 className="storage">Storage</h1>
      {wishListFlag ? (
        <WishList movies={movieList} />
      ) : (
        <h2 style={{ textTransform: upperCase }}>
          Please add your favorite movies.
        </h2>
      )}
    </>
  );
};

export default Storage;

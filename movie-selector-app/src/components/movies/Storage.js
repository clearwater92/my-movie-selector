import { useSelector, useDispatch } from 'react-redux';
import _, { upperCase } from 'lodash';
import { FaShoppingBag } from 'react-icons/fa';

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
    <div className="storage__title">
      <FaShoppingBag className="storage__title__icon" />
      <h1 className="storage__title__text">Storage</h1>
    </div>
      {wishListFlag ? (
        <WishList movies={movieList} />
      ) : (
        <h2 className="storage__empty-message">
          Please add your favorite movies.
        </h2>
      )}
    </>
  );
};

export default Storage;

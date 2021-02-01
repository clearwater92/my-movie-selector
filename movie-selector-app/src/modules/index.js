import { combineReducers } from 'redux';
import { tmdbReducer, wishListReducer } from './movie';

const reducer = combineReducers({
  movies: tmdbReducer,
  wishList: wishListReducer,
});

export default reducer;

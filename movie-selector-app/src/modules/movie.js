import axios from 'axios';
import _ from 'lodash';
import { SEARCH_API, JSON_SERVER_URL } from '../constants';

// 액션 타입
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const LIKE_MOVIE = 'LIKE_MOVIE';
const FETCH_WISH_LIST = 'FETCH_WISH_LIST';

// 액션 생성 함수
export const searchMovies = (searchTerm) => async (dispatch) => {
  const response = await axios.get(SEARCH_API + searchTerm);
  dispatch({ type: SEARCH_MOVIES, payload: response.data.results });
};

export const likeMovie = (movie) => async (dispatch) => {
  console.log('movie', movie);
  const response = await axios
    .create({ baseURL: JSON_SERVER_URL })
    .post('/wishList', { ...movie });
  console.log(response);
  dispatch({ type: LIKE_MOVIE, payload: response.data });
};

export const fetchWishList = () => async (dispatch) => {
  const response = await axios
    .create({ baseURL: JSON_SERVER_URL })
    .get('/wishList');
  dispatch({ type: FETCH_WISH_LIST, payload: response.data });
};

export const tmdbReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};

export const wishListReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_MOVIE:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_WISH_LIST:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};

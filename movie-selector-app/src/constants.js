export const API_KEY = '6f76d547fab518423df7a041212b23b1';
export const BASE_TMDB = 'https://api.themoviedb.org/3/';
export const URL = `${BASE_TMDB}movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=KR`;
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w1280';
export const SEARCH_API = `${BASE_TMDB}search/movie?&api_key=${API_KEY}&query=`;
export const FEATURED_API = `${BASE_TMDB}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
export const IMAGE_NOT_PREPARED =
  'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=369&q=80';
export const JSON_SERVER_URL = 'https://jsonserver-clearwater.herokuapp.com';

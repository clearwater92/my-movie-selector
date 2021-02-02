import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './movies/Navigation';
import Search from './movies/Search';
import MovieList from './movies/MovieList';
import Storage from './movies/Storage';
import WishList from './movies/WishList';
import Detail from './movies/Detail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Route path="/" exact component={MovieList}>
            <Search />
          </Route>
          <Route path="/wishList" exact component={WishList}>
            <Storage />
          </Route>
          <Route path="/movie/:id" exact component={Detail}>
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

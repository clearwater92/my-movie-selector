import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './movies/MovieList';
import Navigation from './movies/Navigation';
import Search from './movies/Search';
import WishList from './movies/WishList';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Route path="/" exact component={MovieList}>
            <Search />
          </Route>
          <Route path="/wishList" exact component={WishList} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

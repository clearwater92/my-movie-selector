import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './movies/MovieList';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	
	const onSubmit = e => {
		e.preventDefault();
		setSearchTerm(e.target.value);
		return <MovieList searchTerm={searchTerm}/>
	}
  return (
    <>
      <header>
        <div className="navi-bar">
          <div className="menu">
            <div>home</div>
            <div>wish list</div>
          </div>
          <div className="search">
            <form onSubmit={onSubmit}>
							<input type="text" />
						</form>
          </div>
        </div>
      </header>
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={MovieList}></Route>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

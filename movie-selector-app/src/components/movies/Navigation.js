import { Link } from 'react-router-dom';
import '../../index.css';

const Navigation = () => {
  return (
    <>
      <header>
        <div className="navi-bar">
          <div className="menu">
            <div>
              <Link to="/">search</Link>
            </div>
            <div>
              <Link to="/wishList">wish list</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;

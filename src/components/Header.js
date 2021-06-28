import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticated);


  const logOutHandler = (events) => {
    events.preventDefault();
    dispatch(authActions.logOut());
    console.log('called');

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {!auth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;

import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Global';
import { Link } from 'react-router-dom';
import Logo from '../logo.webp';
import { HeaderStyled } from '../styled/Header.styled';

const Header = () => {
  const { checkIfUserIsAuthenticated } = useContext(GlobalContext);

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login'
  };

  return (
    <HeaderStyled>
      <div>
        <Link to="/" >
        <img src={Logo} />
        </Link>
      </div>
      <nav>
        {checkIfUserIsAuthenticated() ? (
          <ul>
            <li>
              <Link to="/">Sign Generator</Link>
            </li>
            <li>
              <Link to="/manage">Your account</Link>
            </li>
            <li className='logout' onClick={logoutHandler} >Logout</li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;

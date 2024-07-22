import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Global';
import { Link } from 'react-router-dom';

const Header = () => {
  const { checkIfUserIsAuthenticated } = useContext(GlobalContext);

  return (
    <header>
      <div>logo</div>
      <nav>
        {checkIfUserIsAuthenticated() ? (
          <ul>
            <li><Link to="/" >Sign Generator</Link></li>
            <li><Link to="/manage" >Your account</Link></li>
            <li><Link to="/logout" >Logout</Link></li>
          </ul>
        ) : (
          <ul>
            <li><Link to="/register" >Register</Link></li>
            <li><Link to="/login" >Login</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

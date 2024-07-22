import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3005/api/auth/login', {
        email: userEmailRef.current.value,
        password: userPasswordRef.current.value,
      });
      if (res.data.token) {
        localStorage.setItem('authToken', res.data.token);
        setIsAuth(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={loginUser}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={userEmailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={userPasswordRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

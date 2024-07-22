import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FormStyled } from '../../styled/Form.styled';

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  useEffect(() => {
    if (isAuth) {
      window.location.href = '/';
    }
  }, [isAuth]);

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
    <FormStyled>
    <form onSubmit={loginUser}>
      <div>
        <label htmlFor="email">Email</label>
        <input required type="email" id="email" ref={userEmailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input required type="password" id="password" ref={userPasswordRef} />
      </div>
      <button type="submit">Login</button>
    </form>
    </FormStyled>
  );
};

export default Login;

import React, { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormStyled } from '../../styled/Form.styled';

const RegisterForm = () => {
  const userFirstNameRef = useRef();
  const userLastNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const registerUser = async (e) => {
    e.preventDefault(); 
    try {
        const res = await axios.post((process.env.PORT || `${process.env.REACT_APP_PRODUCTION}/register`), {
            first_name: userFirstNameRef.current.value,
            last_name: userLastNameRef.current.value,
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
        });
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
  }

  return (
    <FormStyled>
      <form
        onSubmit={registerUser}
      >
        <div>
          <label htmlFor="first_name">First Name</label>
          <input required type="text" id="first_name" ref={userFirstNameRef} />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input required type="text" id="last_name" ref={userLastNameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input required type="email" id="email" ref={userEmailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input required type="password" id="password" ref={userPasswordRef} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login" >Log in</Link></p>
    </FormStyled>
  );
};

export default RegisterForm;

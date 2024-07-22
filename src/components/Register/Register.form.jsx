import React, { useRef } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const userFirstNameRef = useRef();
  const userLastNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const registerUser = async (e) => {
    e.preventDefault(); 
    try {
        const res = await axios.post('http://localhost:3005/api/auth/register', {
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
    <>
      <form
        onSubmit={registerUser}
      >
        <div>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" ref={userFirstNameRef} />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" ref={userLastNameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={userEmailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={userPasswordRef} />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;

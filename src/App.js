import React, { useContext } from 'react';
import SignGenerator from './components/SignGenerator';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import RegisterForm from './components/Register/Register.form';
import LoginForm from './components/Login/Login.form';
import RegisterProvider from './Context/RegisterContext';
import { GlobalContext } from './Context/Global';
import Header from './components/Header';

const App = () => {
  const { checkIfUserIsAuthenticated } = useContext(GlobalContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              checkIfUserIsAuthenticated() ? <SignGenerator /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterProvider>
                <RegisterForm />
              </RegisterProvider>
            }
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

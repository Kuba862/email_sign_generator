import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, SignatureGenerator } from './components/Components';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/sign-generator" element={<SignatureGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;

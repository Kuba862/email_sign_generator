import React from 'react';
import GlobalProvider from './Context/Global';
import SignGenerator from './components/SignGenerator';

const App = () => {
  
  return (
    <>
      <GlobalProvider >
        <SignGenerator />
      </GlobalProvider>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';
import Routes from './router';

// TODO Test Router
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Theme />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;

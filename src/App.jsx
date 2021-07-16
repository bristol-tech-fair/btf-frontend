import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';
import Router from './router';

// TODO Test Router
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Theme />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;

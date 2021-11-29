/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme';
import Routes from './router';

const App = () => {
  return (
    <Router>
      <Theme />
      <Routes />
    </Router>
  );
};

export default App;

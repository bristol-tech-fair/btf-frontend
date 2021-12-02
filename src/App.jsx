/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme';
import AppRoutes from './router';

const App = () => {
  return (
    <Router>
      <Theme />
      <AppRoutes />
    </Router>
  );
};

export default App;

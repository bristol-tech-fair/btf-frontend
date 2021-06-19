import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Router>
        <Theme />
        <HomePage readMoreUrl="/" />
      </Router>
    </>
  );
};

export default App;

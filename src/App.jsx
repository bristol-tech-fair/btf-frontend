import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './theme';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Router>
        <Theme />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage readMoreUrl="/" />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;

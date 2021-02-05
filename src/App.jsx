import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router';

const App = () => {
  return (
    <BrowserRouter>
      <Theme />
      {/*  <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <p>p</p>
      <a href="#/">a</a> */}
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router';
import ModalContext from './context/ModalContext';

const App = () => {
  const [modalOn, setModalOn] = useState(false);
  return (
    <BrowserRouter>
      <Theme />
      {/*  <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <p>p</p>
      <a href="#/">a</a> */}
      <ModalContext.Provider value={{ modalOn, setModalOn }}>
        <Header />
        <Router />
        <Footer />
      </ModalContext.Provider>
    </BrowserRouter>
  );
};

export default App;

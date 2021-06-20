import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';
import SubmitResourceForm from './components/SubmitResourceForm';

const App = () => {
  return (
    <>
      <Theme />
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <p>p</p>
      <a href="#/">a</a>
      <BrowserRouter>
        <SubmitResourceForm
          selectAges={[{ value: '1', label: '1' }]}
          selectCategory={[{ value: '1', label: '1' }]}
        />
      </BrowserRouter>
    </>
  );
};

export default App;

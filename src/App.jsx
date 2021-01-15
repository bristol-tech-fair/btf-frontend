import React from 'react';
import Theme from './theme';
import Pattern from './components/Pattern';

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
      <Pattern color="#05AFF2" size="L" />
      <Pattern color="#006CE6" size="L" />
      <Pattern color="#F20544" size="L" />
    </>
  );
};

export default App;

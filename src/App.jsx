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
      <Pattern color="midblue" size="M" />{' '}
      {/* color: 'lightpink' || 'darkpink' || 'mattepink' || 'logopink' || 'lightgrey' || 'darkgrey' || 'darkburgundy' || 'orange' || 'lightblue' || 'midblue' || 'darkblue' */}
      {/* size: 'L' || 'M' || 'S' */}
    </>
  );
};

export default App;

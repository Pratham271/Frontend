import React from 'react';

import ScreenState from './context/ScreenState';

import FinalComponent from './components/FinalComponent';

function App() {
  return (
    <ScreenState>
      <FinalComponent/>
    </ScreenState>
  );
}

export default App;

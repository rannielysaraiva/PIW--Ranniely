import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Galeria from './components/Galeria/Galeria';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Galeria />
      </header>
    </div>
  );
}

export default App;

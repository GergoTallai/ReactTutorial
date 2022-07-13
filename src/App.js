import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';
import React from 'react';
/*
Index.js-ben található a hivatkozás a renderelésre és az "APP"-ra.
*/
function App() {

  return ( //Minidg kell return
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Party hard!</p>
        <Person />
      </header>
    </div>
  );
}

export default App;

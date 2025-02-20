import React from 'react';
import './App.css';
import pfp from './images/pfp.jpg'

function App() {
  return (
    <div className='app'>App
      <header className='header'>
        <h1>Jahzz's Blog</h1>
        <hr className='break'></hr>
      </header>
    
    <main className='content'>
        <img src={pfp} alt='WHAT' className='pfp'/>

    </main>
    </div>
  );
}

export default App
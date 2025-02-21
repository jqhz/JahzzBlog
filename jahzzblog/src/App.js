import React, { useState } from 'react';
import './App.css';
import pfp from './images/pfp.jpg'
import settings from './images/settings.png'
import {FaMoon,FaSun} from "react-icons/fa"


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fade, setFade] = useState(false);
  //const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);
  const toggleTheme = () => {
    setFade(true); // Start fade-out effect
    setTimeout(() => {
      setDarkMode(!darkMode); // Toggle dark mode
      setFade(false); // Start fade-in effect
    }, 300); // Delay for smooth transition
  };
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className='header'>
        <h1>Jahzz's Blog</h1>
        {/*<hr className='break'></hr>*/}
        <button className="theme-toggle" onClick={toggleTheme}>
        
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      </header>
      
      <main className='content'>
        <img src={pfp} alt='WHAT' className='pfp'/>

      </main>
    </div>
  );
}

export default App
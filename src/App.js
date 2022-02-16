import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (false);

  return (
    <div className="App">
      <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;

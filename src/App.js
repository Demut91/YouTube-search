import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router';
import Mainpage from './components/Mainpage/Maipage';
import SearchingResults from './components/SearchingResults/SearchingResults';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (true);


  function quit() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/loginpage" />} />
        <Route
          path="/loginpage"
          element={
            <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/main"
          element={<Mainpage isLoggedIn={isLoggedIn} quit={quit}/>}
        />
          <Route
          path="/results"
          element={<SearchingResults />}
        />

      </Routes>

    </div>
  );
}

export default App;

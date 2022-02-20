import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router';
import Mainpage from './components/Mainpage/Maipage';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [login, setLogin] = useState ('');
  const [queries, setQueries] = useState ([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/loginpage" />} />
        <Route
          path="/loginpage"
          element={
            <LoginPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              login={login}
              setLogin={setLogin}
              setQueries={setQueries}
            />
          }
        />
        <Route
          path="/searching"
          element={
            <Mainpage
              isLoggedIn={isLoggedIn}
              login={login}
              setIsLoggedIn={setIsLoggedIn}
              queries={queries}
              setQueries={setQueries}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;

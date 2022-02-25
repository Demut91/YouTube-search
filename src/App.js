import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router';
import Mainpage from './components/Mainpage/Maipage';
import Favorites from './components/Favorites/Favorites';
import Searching from './components/Searching/Searching';
import {PrivateRoute} from './components/Routes/PrivateRout';
import Searchingresults from './components/SearchingResults/SearchingResults';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (true);
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
          path="main/*"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Mainpage
                queries={queries}
                setQueries={setQueries}
                login={login}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="/searching"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Searching />
            </PrivateRoute>
          }
        />
        <Route
          path="/results"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Searchingresults />
            </PrivateRoute>
          }
        />
        <Route />
      </Routes>
    </div>
  );
}

export default App;

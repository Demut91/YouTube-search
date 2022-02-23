import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router';
import Mainpage from './components/Mainpage/Maipage';
import Favorites from './components/Favorites/Favorites';
import Searching from './components/Searching/Searching';
import {PrivateRoute} from './components/Routes/PrivateRout';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [login, setLogin] = useState ('');
  const [queries, setQueries] = useState ([]);
  const [modal, showModal] = useState (false);

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
                modal={modal}
                showModal={showModal}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                login={login}
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
        <Route />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router';
import Mainpage from './components/Mainpage/Maipage';
import Favorites from './components/Favorites/Favorites';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (true);
  const [login, setLogin] = useState ('');
  const [queries, setQueries] = useState ([
    {query: 'gojira', name: 'gojira', order: 'relevance', maxResults: 19},
    {query: 'mastodon', name: 'mastodon', order: 'relevance', maxResults: 12},
  ]);
  const [modal, showModal] = useState (false);

  function quit() {
    setIsLoggedIn(false);
    localStorage.setItem(`${login}`, JSON.stringify(queries));
  }

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
          path="/main"
          element={
            <Mainpage
              isLoggedIn={isLoggedIn}             
              queries={queries}
              setQueries={setQueries}
              modal={modal}
              showModal={showModal}
              quit={quit}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              queries={queries}
              setQueries={setQueries}
              modal={modal}
              showModal={showModal}
              quit={quit}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;

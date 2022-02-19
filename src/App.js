import React from 'react';
import './App.css';
import LoginPage from './components/Loginpage/Loginpage';
import {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router';
import Mainpage from './components/Mainpage/Maipage';
import Favorites from './components/Favorites/Favorites';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState (true);
  const [login, setLogin] = useState ('Zaxar');
  const [queries, setQueries] = useState ([
    {query: 'gojira', name: 'gojira', order: 'relevance', maxResults: 19},
    {query: 'mastodon', name: 'mastodon', order: 'relevance', maxResults: 12},
  ]);

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
              login={login}
              setIsLoggedIn={setIsLoggedIn}
              queries={queries}
              setQueries={setQueries}
            />
          }
        />
        <Route path="/favorites" element={<Favorites queries={queries} setQueries={setQueries}/>} />

      </Routes>

    </div>
  );
}

export default App;

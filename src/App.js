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
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [login, setLogin] = useState ('');
  const [queries, setQueries] = useState ([]);
  const [modal, showModal] = useState (false);

  const [videos, setVideos] = useState ([]);
  const [totalResults, setTotalResults] = useState (null);
  const [inputValue, setInputValue] = useState ('');

  const KEY = 'AIzaSyD7Y0TCa1s867DB51jEhNv20ljCQYXFKG4';

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
                login={login}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                totalResults={totalResults}
                setTotalResults={setTotalResults}
                inputValue={inputValue}
                setInputValue={setInputValue}
                videos={videos}
                setVideos={setVideos}
                KEY={KEY}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Favorites
                setTotalResults={setTotalResults}
                setInputValue={setInputValue}
                inputValue={inputValue}
                videos={videos}
                totalResults={totalResults}
                setVideos={setVideos}
                KEY={KEY}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/searching"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Searching
                setTotalResults={setTotalResults}
                setInputValue={setInputValue}
                inputValue={inputValue}
                videos={videos}
                totalResults={totalResults}
                setVideos={setVideos}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/results"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Searchingresults inputValue={inputValue}  />
            </PrivateRoute>
          }
        />

        <Route />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Header from "../Header/Header";
import Searching from "../Searching/Searching";
import { Routes, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";

function Mainpage({
  queries,
  setQueries,
  modal,
  showModal,
  setIsLoggedIn,
  login,
}) {
  function savingQuery(values) {
    let arr = [];
    arr.push(values);
    setQueries([...queries, ...arr]);
  }

  function quit() {
    setIsLoggedIn(false);
    localStorage.setItem(`${login}`, JSON.stringify(queries));
  }

  return (
    <>
      {/* <button
          onClick={() => {
            console.log(queries);
            
          }}
        ></button> */}
      <Header quit={quit} />
      <Routes>
        <Route
          path="/searching"
          element={
            <Searching
              savingQuery={savingQuery}
              modal={modal}
              showModal={showModal}
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default Mainpage;

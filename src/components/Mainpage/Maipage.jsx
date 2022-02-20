import React from "react";
import Header from "../Header/Header";
import { Navigate } from "react-router";
import Searching from "../Searching/Searching";

function Mainpage({
  isLoggedIn,
  queries,
  setQueries,
  modal,
  showModal,
  quit
}) {
  function savingQuery(values) {
    let arr = [];
    arr.push(values);
    setQueries([...queries, ...arr]);
  }

  if (isLoggedIn) {
    return (
      <>
        <button
          onClick={() => {
            console.log(queries);
            // localStorage.clear()
          }}
        ></button>
        <Header quit={quit} />
        <Searching
          savingQuery={savingQuery}
          modal={modal}
          showModal={showModal}
        />
      </>
    );
  } else return <Navigate to="/loginpage" />;
}

export default Mainpage;

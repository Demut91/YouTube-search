import React from "react";
import Header from "../Header/Header";
import { Navigate } from "react-router";
import Searching from "../Searching/Searching";

function Mainpage({ isLoggedIn, login, setIsLoggedIn, queries, setQueries }) {
  

  function savingQuery(values) {
    let arr = [];
    arr.push(values);
    setQueries([...queries, ...arr]);
  }

  function quit() {
    setIsLoggedIn(false);
    localStorage.setItem(`${login}`, JSON.stringify(queries));   
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
        <Searching savingQuery={savingQuery} />
      </>
    );
  } else return <Navigate to="/loginpage" />;
}

export default Mainpage;

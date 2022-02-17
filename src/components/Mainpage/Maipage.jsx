import React from "react";
import './Mainpage.css'
import Header from "../Header/Header";
import { Navigate } from "react-router";
import Searching from "../Searching/Searching";


function Mainpage({ isLoggedIn, quit }) {


  if (isLoggedIn) {
    return (
      <>
        <Header quit={quit} />
        <Searching/>
      </>
    );
  } else return <Navigate to="/" />;
}

export default Mainpage;

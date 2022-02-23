import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import Searching from "../Searching/Searching";
import { Routes, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import SearchingResults from "../SearchingResults/SearchingResults";
import { useNavigate}  from "react-router";

function Mainpage({
  queries,
  setQueries,
  modal,
  showModal,
  setIsLoggedIn,
  login,
  setTotalResults,  
  setInputValue,
  inputValue,
  videos, 
  totalResults,
  setVideos,
  KEY
}) {

  const navigate = useNavigate();


  function handleChange({ target: { value } }) {
    setInputValue(value);
  }


  function savingQuery(values) {
    let arr = [];
    arr.push(values);
    setQueries([...queries, ...arr]);
  }

  function quit() {
    setIsLoggedIn(false);
    localStorage.setItem(`${login}`, JSON.stringify(queries));
  }

  async function search(word) {
    if (word.length !== 0) {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${word}&type=video&key=${KEY}`
        ).then(navigate("/main/results"))       
        setVideos(res.data.items);
        setTotalResults(res.data.pageInfo.totalResults);
      } catch (err) {
        return console.log(err);
      }
    }
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
              setTotalResults={setTotalResults}              
              setInputValue={setInputValue}
              inputValue={inputValue}
              videos={videos}              
              totalResults={totalResults}
              setVideos={setVideos}
              KEY={KEY}
              search={search}
              handleChange={handleChange}
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
              KEY={KEY}
              setTotalResults={setTotalResults}             
              setInputValue={setInputValue}
              inputValue={inputValue}
              videos={videos}             
              totalResults={totalResults}
              setVideos={setVideos}
            />
          }
        />
        <Route
          path="/results"
          element={
            <SearchingResults
            savingQuery={savingQuery}
            videos={videos}
            search={search}
            totalResults={totalResults}
            inputValue={inputValue}
            handleChange={handleChange}
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

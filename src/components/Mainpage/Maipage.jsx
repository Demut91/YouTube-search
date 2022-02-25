import { useState, React } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Searching from "../Searching/Searching";
import { Routes, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import SearchingResults from "../SearchingResults/SearchingResults";
import { useNavigate } from "react-router";

function Mainpage({ queries, setQueries, setIsLoggedIn, login }) {
  const [modal, showModal] = useState(false);
  const [videos, setVideos] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const KEY = "AIzaSyCsrVetn7441-l8debFN9YygJ_q_2EemwE";

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

  async function search(values) {
    if (typeof values === "string") {
      values = {
        query: values,
        name: values,
        order: "relevance",
        maxResults: 12,
      };
    }
    if (values.query.length !== 0) {
      setInputValue(values.query);
      try {
        const res = await axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${values.maxResults}&q=${values.query}&type=video&order=${values.order}&key=${KEY}`
          )
          .then(navigate("/main/results"));
        setVideos(res.data.items);
        setTotalResults(res.data.pageInfo.totalResults);
      } catch (err) {
        return console.log(err);
      }
    }
  }

  return (
    <>
      <Header quit={quit} />
      <Routes>
        <Route
          path="/searching"
          element={<Searching search={search} handleChange={handleChange} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              queries={queries}
              setQueries={setQueries}
              modal={modal}
              showModal={showModal}
              executionQuery={search}
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

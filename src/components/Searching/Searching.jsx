import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Searching.css";
import SearchingResults from "../SearchingResults/SearchingResults";
import { Input } from "antd";
const { Search } = Input;

function Searching({ savingQuery, modal, showModal }) {
  const [videos, setVideos] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [searchingActive, setsearchingActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleChange({ target: { value } }) {
    setInputValue(value);
  }

  const KEY = "AIzaSyD7Y0TCa1s867DB51jEhNv20ljCQYXFKG4";

  async function search(word) {
    if (word.length !== 0) {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${word}&type=video&key=${KEY}`
        );
        setsearchingActive(true);
        setVideos(res.data.items);
        setTotalResults(res.data.pageInfo.totalResults);
      } catch (err) {
        return console.log(err);
      }
    }
  }

  return (
    <>
      {searchingActive ? (
        <SearchingResults
          savingQuery={savingQuery}
          videos={videos}
          search={search}
          totalResults={totalResults}
          inputValue={inputValue}
          handleChange={handleChange}
        />
      ) : (
        <div className="searching">
          <h1 className="searching__heading">Поиск видео</h1>
          <Search
            placeholder="Что хотите посмотреть?"
            enterbutton="Поиск"
            size="large"
            onChange={handleChange}
            onSearch={search}
          />
        </div>
      )}
    </>
  );
}

export default Searching;

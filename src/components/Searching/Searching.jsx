import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Searching.css";
import SearchingResults from "../SearchingResults/SearchingResults";
import { Input } from "antd";
const { Search } = Input;

function Searching() {
  const [videos, setVideos] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [searchingActive, setsearchingActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleChange({ target: { value } }) {
    setInputValue(value);
  }

  const KEY = "AIzaSyCsrVetn7441-l8debFN9YygJ_q_2EemwE";

  async function search(word) {
    if (word.length !== 0) {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: word,
              maxResults: 12,
              part: "snippet",
              key: KEY,
            },
            headers: {},
          }
        );
        setTotalResults(res.data.pageInfo.totalResults);
        setVideos(res.data.items);
        setsearchingActive(true);
      } catch (err) {
        return console.log(err);
      }
    }
  }

  console.log(videos);
  console.log(totalResults);

  return (
    <>
      {searchingActive ? (
        <SearchingResults
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

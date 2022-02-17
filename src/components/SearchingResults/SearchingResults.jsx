import React from "react";
import { useState } from "react";
import "./SearchingResults.css";

import {
  BarsOutlined,
  AppstoreOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
const { Search } = Input;

function Searchingresults({ search, totalresults, inputValue, handleChange }) {
  const [grid, setGrid] = useState(true);

  function makeGrid() {
    setGrid(true);
  }

  function makeFlex() {
    setGrid(false);
  }

  return (
    <section className="searching-results">
      <h1 className="searching-results__heading">Поиск видео</h1>
      <Search
        placeholder="Что хотите посмотреть?"
        enterButton="Поиск"
        size="large"
        defaultValue={inputValue}
        onSearch={search}
        onChange={handleChange}
      />
      <div className="searching-results__select">
        <button className="searching-results__add">
          <HeartOutlined
            style={{
              fontSize: 16,
              color: "#1890ff",
            }}
          />
        </button>
      </div>
      <div className="searching-results__container">
        <div className="searching-results__info">
          <p>Видео по запросу "{inputValue}"</p>
          <p>{totalresults}</p>
        </div>
        <div className="searching-results__buttons">
          <button className="searching-results__button" onClick={makeGrid}>
            <BarsOutlined
              style={
                grid ? { fontSize: 24, color: "#1390E5" } : { fontSize: 24 }
              }
            />
          </button>
          <button className="searching-results__button" onClick={makeFlex}>
            <AppstoreOutlined
              style={
                !grid ? { fontSize: 24, color: "#1390E5" } : { fontSize: 24 }
              }
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Searchingresults;

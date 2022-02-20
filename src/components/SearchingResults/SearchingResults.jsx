import React from "react";
import { useState } from "react";
import "./SearchingResults.css";
import Videos from "../Videos/Videos";
import ModalWindow from "../ModalWindow/ModalWindow";

import {
  BarsOutlined,
  AppstoreOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
const { Search } = Input;

function Searchingresults({
  search,
  totalresults,
  inputValue,
  handleChange,
  videos,
  savingQuery,
  modal,
  showModal
}) {
  

  const [grid, setGrid] = useState(false);
  



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
              fontSize: 18,
              color: "#1890ff",
            }}
            onClick={() => {
              showModal(true);
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
          <button className="searching-results__button" onClick={() => {
              setGrid(true);
            }}>
            <BarsOutlined
              style={
                grid ? { fontSize: 24, color: "#1390E5" } : { fontSize: 24 }
              }
            />
          </button>
          <button className="searching-results__button" onClick={() => {
              setGrid(false);
            }}>
            <AppstoreOutlined
              style={
                !grid ? { fontSize: 24, color: "#1390E5" } : { fontSize: 24 }
              }
            />
          </button>
        </div>
        </div>
        <Videos videos={videos} grid={grid} />
        <ModalWindow
        savingQuery={savingQuery}
          visible={modal}
          inputValue={inputValue}          
          onCancel={() => {
            showModal(false);
          }}
          adding={true}
        />
      
    </section>
  );
}

export default Searchingresults;

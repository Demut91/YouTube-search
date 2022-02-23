import React from "react";
import "./Searching.css";
import { Input } from "antd";
const { Search } = Input;

function Searching({ handleChange, search }) {
  return (
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
  );
}

export default Searching;

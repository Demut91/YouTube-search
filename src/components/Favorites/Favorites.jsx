import React from "react";
import Header from "../Header/Header";
import { Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import "./Favorites.css";

function Favorites({ queries }) {


  return (
    <>
      <Header></Header>
      <section className="favorites__container">
        <h2 className="favorites__heading">Избранное</h2>
        {queries && (
          <ul className="favorites__list">
            {queries.map((query) => (
              <li  key={uuidv4()} className="favorites-item" >
                <p className="favorites-item__title">{query.name}</p>
                <div className="favorites-item__buttons">
                  <Button >Изменить</Button>
                  <Button>Удалить</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Favorites;

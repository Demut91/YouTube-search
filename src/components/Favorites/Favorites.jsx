import React, { useState } from "react";
import { Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import "./Favorites.css";
import axios from "axios";
import { useNavigate } from "react-router";
import ModalWindow from "../ModalWindow/ModalWindow";

function Favorites({
  queries,
  setQueries,
  modal,
  showModal,
  KEY,
  setVideos,
  setTotalResults,
  setInputValue
}) {
  const [queryParams, setQueryParams] = useState({});
  const navigate = useNavigate();

  function handleQueryClick(values) {
    showModal(true);
    setQueryParams(values);
  }

  function changingQuery(values) {
    const updated = queries.find((el) => el.query === values.query);
    setQueries(
      queries.map((x) =>
        x.query === values.query
          ? {
              ...updated,
              name: values.name,
              order: values.order,
              maxResults: values.maxResults,
            }
          : x
      )
    );
  }

  function deletingQuery(query) {
    setQueries(queries.filter((el) => el.name !== query.name));
  }

  async function executionQuery(values) {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${values.maxResults}&q=${values.query}&type=video&order=${values.order}&key=${KEY}`
      );
      setInputValue(values.query);
      setVideos(res.data.items);
      setTotalResults(res.data.pageInfo.totalResults);
      navigate("/main/results");
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <section className="favorites__container">
      <h2 className="favorites__heading">Избранное</h2>
      {queries && (
        <ul className="favorites__list">
          {queries.map((query) => (
            <li key={uuidv4()} className="favorites-item">
              <p className="favorites-item__title">{query.name}</p>
              <div className="favorites-item__buttons">
                <Button onClick={() => executionQuery(query)}>Выполнить</Button>
                <Button onClick={() => handleQueryClick(query)}>
                  Изменить
                </Button>
                <Button onClick={() => deletingQuery(query)}>Удалить</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <ModalWindow
        params={queryParams}
        savingQuery={changingQuery}
        visible={modal}
        adding={false}
        onCancel={() => {
          showModal(false);
        }}
      />
    </section>
  );
}

export default Favorites;

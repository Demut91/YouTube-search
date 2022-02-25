import React from "react";
import "./Videos.css";
import { v4 as uuidv4 } from "uuid";
import ReactPlayer from "react-player/youtube";

function Videos({ videos, grid }) {
  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
  return (
    <div className={grid ? "container" : "container__grid"}>
      {videos.map((video) => (
        <div key={uuidv4()} className={grid ? "video" : "video__grid"}>
          <div className={grid ? "videoItem" : "videoItem__grid"}>
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/embed/${video.id.videoId}`}
              controls="true"
            />
          </div>
          <div className={grid ? "video__info" : "video__info__grid"}>
            <h4 className="video__heading">
              {htmlDecode(video.snippet.title)}
            </h4>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;

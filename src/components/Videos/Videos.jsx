import React from "react";
import "./Videos.css";
import { v4 as uuidv4 } from "uuid";

function Videos({ videos, grid }) {
 
  return (
    <div className={grid ? "container" : "container__grid"}>
      {videos.map((video) => (
        
        <div key={uuidv4()} className={grid ? "video" : "video__grid"}>
          <div className={grid ? "videoItem" : "videoItem__grid"}>
            {/* <iframe
              title={video.snippet.description}
              className="video-iframe"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              fs="0"
              width="100%"
              height="100%"
            /> */}
      
          </div>
          <div
            className={grid ? "video__info" : "video__info__grid"}
          >
            <h4 className="video__heading">{video.snippet.title}</h4>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;

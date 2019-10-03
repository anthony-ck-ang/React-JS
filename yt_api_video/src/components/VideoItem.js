import "./VideoItem.css";
import React from "react";

//de-structure props
// when user click -> onClick -> invoke callback with the selected video to App component
//parent -> child; props,
//child -> parent use callback
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

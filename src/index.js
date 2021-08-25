import React from "react";
import ReactDom from "react-dom";

const data = {
  title: "Code Coding Computer Data Developing Development",
  image: "https://placedog.net/500/280",
  user: "Nature Code",
  views: "22k",
  published: "9 months",
  avatar: "https://placedog.net/210/167",
};

function VideoList() {
  return (
    <div className="video-container">
      <div className="video-image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="video-info-container">
        <div className="user-avatar">
          <img src={data.avatar} alt={data.title} />
        </div>
        <div className="video-info">
          <h4 className="video-title">{data.title}</h4>
          <h4 className="video-user">{data.user}</h4>
          <div className="video-stats">
            <span className="video-views">{data.views} views</span>
            <span className="video-published">{data.published}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDom.render(<VideoList />, document.querySelector("#root"));

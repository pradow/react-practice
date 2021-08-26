import React from "react";

function SingleVideo({ title, image, user, views, published, avatar }) {
  const dogBark = () => {
    alert(`${user} says WOOF!`);
  };
  return (
    <div className="video-container">
      <div className="video-image" onClick={dogBark}>
        <img src={image} alt={title} />
      </div>
      <div className="video-info-container">
        <div className="user-avatar" onClick={dogBark}>
          <img src={avatar} alt={title} />
        </div>
        <div className="video-info">
          <h4 className="video-title">{title}</h4>
          <h4 className="video-user">{user}</h4>
          <div className="video-stats">
            <span className="video-views">{views} views</span>
            <span className="video-published">{published}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleVideo;

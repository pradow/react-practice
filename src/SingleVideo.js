import React from "react";

function SingleVideo({
  id,
  title,
  image,
  user,
  views,
  published,
  avatar,
  deleteDog,
}) {
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
          <h4 className="video-title">
            {id} {title}
          </h4>
          <h4 className="video-user">{user}</h4>
          <div className="video-stats">
            <span className="video-views">{views} views</span>
            <span className="video-published">{published}</span>
          </div>
        </div>
        <button onClick={() => deleteDog(id)}>Delete</button>
      </div>
    </div>
  );
}

export default SingleVideo;

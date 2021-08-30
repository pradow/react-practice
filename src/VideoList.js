import React from "react";
import { useGlobalContext } from "./context";
import SingleVideo from "./SingleVideo";

function VideoList() {
  const { data, randomDog, dispatch } = useGlobalContext();
  const deleteDog = (id) => {
    dispatch({ type: "DELETE_DOG", payload: id });
  };

  return (
    <div className="content">
      <div className="current-user">
        <img src={randomDog.message} alt="A picture of a dog" />
      </div>
      <div className="video-grid">
        {data.map((item) => (
          <SingleVideo key={item.id} {...item} deleteDog={deleteDog} />
        ))}
      </div>
    </div>
  );
}

export default VideoList;

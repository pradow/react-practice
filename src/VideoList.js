import React from "react";
import { useGlobalContext } from "./context";
import SingleVideo from "./SingleVideo";
import useFetch from "./useFetch";

function VideoList() {
  const { data, randomDog, dispatch } = useGlobalContext();
  const deleteDog = (id) => {
    dispatch({ type: "DELETE_DOG", payload: id });
  };

  const url = "https://dog.ceo/api/breeds/image/random";
  useFetch(url, dispatch);

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

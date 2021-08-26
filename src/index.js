import React, { useState } from "react";
import ReactDom from "react-dom";
import SingleVideo from "./SingleVideo";

const data = [
  {
    id: 1,
    title: "Code Coding Computer Data Developing Development",
    image: "https://placedog.net/500/280",
    user: "Nature Code",
    views: "22k",
    published: "9 months",
    avatar: "https://placedog.net/210/167",
  },
  {
    id: 2,
    title: "Code Coding Computer Data Developing Development",
    image: "https://placedog.net/500/280",
    user: "Nature Code",
    views: "22k",
    published: "9 months",
    avatar: "https://placedog.net/210/167",
  },
  {
    id: 3,
    title: "Code Coding Computer Data Developing Development",
    image: "https://placedog.net/500/280",
    user: "Nature Code",
    views: "22k",
    published: "9 months",
    avatar: "https://placedog.net/210/167",
  },
  {
    id: 4,
    title: "Code Coding Computer Data Developing Development",
    image: "https://placedog.net/500/280",
    user: "Nature Code",
    views: "22k",
    published: "9 months",
    avatar: "https://placedog.net/210/167",
  },
];

function VideoList() {
  const [dogs, setDogs] = useState(data);
  const deleteDog = (id) => {
    const filteredArray = dogs.filter((dog) => dog.id !== id);

    setDogs(filteredArray);
  };
  return (
    <div className="video-grid">
      {dogs.map((item) => (
        <SingleVideo key={item.id} {...item} deleteDog={deleteDog} />
      ))}
    </div>
  );
}

ReactDom.render(<VideoList />, document.querySelector("#root"));

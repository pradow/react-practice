import React, { useState, useEffect, useReducer } from "react";
import ReactDom from "react-dom";
import SingleVideo from "./SingleVideo";
import reducer from "./reducer";
import userEvent from "@testing-library/user-event";

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

const initialState = {
  data,
  randomDog: {},
};

function VideoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [dogs, setDogs] = useState(data);
  //const [fetchData, setFetchData] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputName, setInputName] = useState("");
  const getData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dataObject = await response.json();
    console.log(dataObject);
    //setFetchData(dataObject);
  };

  useEffect(() => {
    //getData();
  }, []);

  const deleteDog = (id) => {
    //const filteredArray = state.data.filter((dog) => dog.id !== id);

    //setDogs(filteredArray);
    dispatch({ type: "DELETE_DOG", payload: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputName || !inputTitle) {
      alert("please fill out all inputs");
      return;
    }

    const submitedData = {
      id: new Date().toString(),
      title: inputTitle,
      image: "https://placedog.net/500/280",
      user: inputName,
      views: "22k",
      published: "9 months",
      avatar: "https://placedog.net/210/167",
    };

    //setDogs([...dogs, submitedData]);

    setInputTitle("");
    setInputName("");
  };
  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputName">Name</label>
        <input
          value={inputName}
          type="text"
          id="inputName"
          onChange={(e) => setInputName(e.target.value)}
        />
        <label htmlFor="inputTitle">Title</label>
        <input
          value={inputTitle}
          type="text"
          id="inputTitle"
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="submit">add dog</button>
      </form>
      <div className="current-user">
        <img src={state.randomDog.message} alt="A picture of a dog" />
      </div>
      <div className="video-grid">
        {state.data.map((item) => (
          <SingleVideo key={item.id} {...item} deleteDog={deleteDog} />
        ))}
      </div>
    </div>
  );
}

ReactDom.render(<VideoList />, document.querySelector("#root"));

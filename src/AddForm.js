import React, { useState } from "react";
import { useGlobalContext } from "./context";

function AddForm() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputName, setInputName] = useState("");
  const { dispatch } = useGlobalContext();
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

    dispatch({ type: "ADD_DOG", payload: submitedData });

    setInputTitle("");
    setInputName("");
  };

  return (
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
  );
}

export default AddForm;

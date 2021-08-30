import React, { useContext, useEffect, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  data,
  randomDog: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dataObject = await response.json();
    dispatch({ type: "FETCH_RANDOM_DOG", payload: dataObject });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

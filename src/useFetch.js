import { useEffect } from "react";

const useFetch = (url, dispatch) => {
  const fetching = async () => {
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: "FETCH_RANDOM_DOG", payload: data });
  };

  useEffect(() => {
    fetching();
  }, [url]);
};

export default useFetch;

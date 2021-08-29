const reducer = (state, action) => {
  if (action.type === "DELETE_DOG") {
    const filteredArray = state.data.filter((dog) => dog.id !== action.payload);
    return { ...state, data: filteredArray };
  }

  if (action.type === "ADD_DOG") {
    return { ...state, data: [...state.data, action.payload] };
  }

  return state;
};

export default reducer;

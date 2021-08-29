const reducer = (state, action) => {
  if (action.type === "DELETE_DOG") {
    const filteredArray = state.data.filter((dog) => dog.id !== action.payload);
    return { ...state, data: filteredArray };
  }

  return state;
};

export default reducer;

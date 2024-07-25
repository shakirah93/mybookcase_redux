import data from "../../models/books.json";

const initialState = {
  books: data,
};

// Reducer function
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;

import { combineReducers } from "redux";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
  booksList: booksReducer,
});

export default rootReducer;

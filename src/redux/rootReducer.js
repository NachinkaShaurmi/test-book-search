import { combineReducers } from "redux";
import { bookReducer } from "./book/bookReducer";
import searchReducer from "./searchField/searchReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  search: searchReducer,
});

export default rootReducer;

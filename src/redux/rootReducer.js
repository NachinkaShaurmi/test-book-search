import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";
import selectBookReducer from "./selectedBook/selectedBookReducer";
import searchReducer from "./searchField/searchReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  search: searchReducer,
  selectBook: selectBookReducer,
});

export default rootReducer;

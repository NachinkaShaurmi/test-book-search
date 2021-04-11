import {
  FETCH_BOOK_FAILURE,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
} from "./bookTypes";

// Initial State
export const initialState = {
  loading: false,
  books: [],
  error: "",
};

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        books: [action.payload],
        error: "",
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        books: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;

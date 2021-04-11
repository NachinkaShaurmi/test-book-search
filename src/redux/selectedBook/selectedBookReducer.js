import {
  CHANGE_SELECT_BOOK_TO_EMPTY,
  CHANGE_SELECT_BOOK_TO_VALUE,
} from "./selectedBookTypes";

// Initial State
export const initialState = {
  selectBook: [],
};

// Reducer
const selectBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECT_BOOK_TO_EMPTY:
      return {
        ...state,
        selectBook: []
      };
    case CHANGE_SELECT_BOOK_TO_VALUE:
    return {
      ...state,
      selectBook: [action.payload]
    };
    default:
      return state;
  };
};

export default selectBookReducer;

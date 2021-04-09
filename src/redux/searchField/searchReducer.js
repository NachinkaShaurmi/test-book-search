import {
  CHANGE_SEARCH_TO_EMPTY,
  CHANGE_SEARCH_TO_VALUE,
} from "./searchTypes";

// Initial State
export const initialState = {
  search: "",
};

// Reducer
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TO_EMPTY:
      return {
        ...state,
        search: ""
      };
    case CHANGE_SEARCH_TO_VALUE:
    return {
      ...state,
      search: action.payload
    };
    default:
      return state;
  };
};

export default searchReducer;

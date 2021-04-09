import {
  CHANGE_SEARCH_TO_EMPTY,
  CHANGE_SEARCH_TO_VALUE,
} from "./searchTypes";

// Action Creators

export const changeSearchToEmpty = () => ({
  type: CHANGE_SEARCH_TO_EMPTY,
});

export const changeSearchToValue = (value) => ({
  type: CHANGE_SEARCH_TO_VALUE,
  payload: value
});

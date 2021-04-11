import {
  CHANGE_SELECT_BOOK_TO_EMPTY,
  CHANGE_SELECT_BOOK_TO_VALUE,
} from "./selectedBookTypes";

// Action Creators

export const changeSelectBookToEmpty = () => ({
  type: CHANGE_SELECT_BOOK_TO_EMPTY,
});

export const changeSelectBookToValue = (value) => ({
  type: CHANGE_SELECT_BOOK_TO_VALUE,
  payload: value
});

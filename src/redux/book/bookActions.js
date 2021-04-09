import axios from "axios";
import {
  FETCH_BOOK_FAILURE,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
} from "./bookTypes";

// Action Creators

export const fetchBookRequest = () => ({
  type: FETCH_BOOK_REQUEST,
});

export const fetchBookSuccess = (books) => ({
  type: FETCH_BOOK_SUCCESS,
  payload: books,
});

export const fetchBookFailure = (err) => ({
  type: FETCH_BOOK_FAILURE,
  payload: err,
});

export const fetchBook = (text) => (dispatch) => {
  
  dispatch(fetchBookRequest());
  axios
    .get(`http://openlibrary.org/search.json?q=${text}`)
    .then((res) => {
      const books = res.data;
      dispatch(fetchBookSuccess(books));
    })
    .catch((err) => {
      const errMessage = err.message;
      dispatch(fetchBookFailure(errMessage));
    });
};

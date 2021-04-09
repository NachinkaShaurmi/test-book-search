import { addBooksAction } from "../book/bookReducer";

export const fetchBooks = (text) => {
  return (dispatch) => {
    fetch(`http://openlibrary.org/search.json?q=${text}`)
      .then((response) => response.json())
      .then((json) => dispatch(addBooksAction(json)))
      .catch((e) => console.log(e));
  };
};



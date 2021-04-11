import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectBookToEmpty } from "../../redux/selectedBook/selectedBookAction";
import { getSelectedBookFromState } from "../../redux/selectors";
import cn from "classnames";
import s from "./popup.module.css";

const Popup = () => {
  const selectBook = useSelector(getSelectedBookFromState);
  const dispatch = useDispatch();
  const { author, title, isbn, date, publisher } = selectBook.length
    ? selectBook[0]
    : {};
  console.log(selectBook, isbn);
  const newIsbn = isbn ? isbn[0] : "Not found";
  return (
    <div
      className={cn(s.popup, selectBook.length !== 0 ? s.active : null)}
      onClick={() => dispatch(changeSelectBookToEmpty())}
    >
      <div
        className={cn(s.content, selectBook.length !== 0 ? s.active : null)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.photo}>
          <img
            src={`http://covers.openlibrary.org/b/isbn/${newIsbn}-L.jpg`}
            alt="book"
            height="460"
          />
        </div>
        <ul className={s.description}>
          <li>Title: {title}</li>
          <li>Author: {author}</li>
          <li>Year of first publication: {date}</li>
          <li>Publisher: {publisher}</li>
          <li>ISBN: {isbn && isbn.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Popup;

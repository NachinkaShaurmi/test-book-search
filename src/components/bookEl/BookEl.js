import React from "react";
import { useDispatch } from "react-redux";
import { changeSelectBookToValue } from "../../redux/selectedBook/selectedBookAction";
import s from "./bookEl.module.css";

function BookEl(props) {
  const { author, title, isbn } = props;
  const dispatch = useDispatch();
  const newIsbn = isbn ? isbn[0] : "Not found";
  return (
    <div
      className={s.card}
      onClick={() => dispatch(changeSelectBookToValue(props))}
    >
      <div className={s.photo}>
        <img
          src={
            newIsbn === "Not found"
              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgqAcAAIIAgLO2btEAAAAASUVORK5CYII="
              : `http://covers.openlibrary.org/b/isbn/${newIsbn}-M.jpg`
          }
          height="200"
          alt="book"
        />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.author}>{author}</div>
      <br />
    </div>
  );
}

export default BookEl;

import React from "react";
import s from "./bookEl.module.css";

function BookEl({ author, title, date, isbn, publisher, edition }) {
  console.log(isbn);
  const newIsbn = isbn ? isbn[0] : "Not found";
  return (
    <div className={s.card}>
      <img className={s.photo}
        src={
          newIsbn === "Not found"
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgqAcAAIIAgLO2btEAAAAASUVORK5CYII="
            : `http://covers.openlibrary.org/b/isbn/${newIsbn}-M.jpg`
        }
        height="200"
        width="150"
        alt="Image book"
      />
      <div className={s.title}>{title}</div>
      <div className={s.author}>{author}</div>
      <br />
    </div>
  );
}

export default BookEl;

import React from "react";
import style from "./style.css";

function BookEl({ author, title, date, isbn, publisher }) {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <br />
    </div>
  );
}

export default BookEl;

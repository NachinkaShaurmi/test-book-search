import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "./redux/book/bookActions";
import { getBooksFromState, getLoadingFromState, getSearchFromState } from "./redux/selectors";
import BookEl from "./components/BookEl/BookEl";
import {changeSearchToValue} from "./redux/searchField/searchActions"

function App() {
  const books = useSelector(getBooksFromState);
  const loading = useSelector(getLoadingFromState);
  const search = useSelector(getSearchFromState);
  const dispatch = useDispatch();

  let boksList;
  if (books.length > 0) {
    boksList = books[0].docs.map((b) => (
      <BookEl
        key={b.key}
        author={b.author_name}
        title={b.title}
        date={b.first_publish_year}
        isbn={b.isbn}
        publisher={b.publisher}
      />
    ));
  }

  const handlerSearchField = (value) => {
    dispatch(changeSearchToValue(value));
  }

  return (
    <div className="app">
      <input autoFocus value={search} onChange={(e) => handlerSearchField(e.target.value)}/>
      <button onClick={() => dispatch(fetchBook(search))}>получить</button>
      <div>
      { loading ? "Loading..." : books.length === 0 ? null : boksList}
      </div>
      {/* {books.length > 0 ? <div>{boksList}</div> : <div>No clients</div>} */}
    </div>
  );
}

export default App;

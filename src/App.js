import s from "./App.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "./redux/book/bookActions";
import {
  getBooksFromState,
  getLoadingFromState,
  getSearchFromState,
} from "./redux/selectors";
import BookEl from "./components/BookEl/BookEl";
import useDebounce from "./components/customHook/useDebounce";
import { changeSearchToValue } from "./redux/searchField/searchActions";

function App() {
  const books = useSelector(getBooksFromState);
  const loading = useSelector(getLoadingFromState);
  const search = useSelector(getSearchFromState);
  const debouncedSearch = useDebounce(search, 1000);
  const dispatch = useDispatch();
  const reqSearch = search.replace(/ /g, "+");

  let booksList;
  if (books.length > 0) {
    booksList = books[0].docs.map((b) => (
      <BookEl
        key={b.key}
        author={b.author_name}
        title={b.title}
        date={b.first_publish_year}
        isbn={b.isbn}
        publisher={b.publisher}
        edition={b.edition_key}
      />
    ));
  }

  useEffect(() => {
    if (search) {
      dispatch(fetchBook(reqSearch));
    }
  }, [debouncedSearch]);

  const handlerSearchField = (value) => {
    dispatch(changeSearchToValue(value));
  };

  return (
    <div className={s.app}>
      <div className={s.search}>
        <input
          autoFocus
          value={search}
          placeholder="Title"
          className={s.title}
          onChange={(e) => handlerSearchField(e.target.value)}
        />
        <button
          className={s.searchButton}
          disabled={loading || search === ""}
          onClick={() => dispatch(fetchBook(reqSearch))}
        >
          Search
        </button>
      </div>  
      <div className={s.cards}>{loading ? <div className={s.preloader}></div> : books.length === 0 ? null : booksList}</div>
    </div>
  );
}

export default App;

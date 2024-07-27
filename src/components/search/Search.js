import { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import setBooks from "../../store/actions/booksAction";

function Search() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const findBooks = async (value) => {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());

    if (!results.error) {
      dispatch(setBooks(results.items));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    findBooks(keyword);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        value={keyword}
        id="search"
        required
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Search Book</button>
    </form>
  );
}

export default Search;

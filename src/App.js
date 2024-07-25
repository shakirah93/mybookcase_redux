import React, { useState } from "react";
import data from "./models/books.json";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bookcase from "./pages/Bookcase";
import Contact from "./pages/Contact";

function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  const findBooks = async (value) => {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());

    if(!results.error) {
      setBooks(results.items);
    }
  };

  return (
    <Router>
      {/* <React.Fragment> */}
      <Header />
      {/* implementing list of books using the 'books' state directly */}

      {/* {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))} */}

      {/* passing the 'books' state to the booksList prop in the Booklist component (child component) */}

      {/* </React.Fragment> */}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              bProps={books}
              keyProps={keyword}
              setKeyProps={setKeyword}
              searchBooksProps={findBooks}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/bookcase" element={<Bookcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useSelector } from "react-redux";
import Book from "../book/Book";

function Booklist() {
  const booksList = useSelector((state) => state.booksList.books);

  console.log("length: " + booksList.length);

  // this shows when the books.json array is empty (i.e [])
  if (booksList.length === 0) {
    return <p>No books yet ...</p>;
  }

  return (
    <div>
      {/* Without destructuring */}
      {/* {books.map((book) => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          price={book.price}
        />
      ))} */}

      {/* With destructing */}
      {booksList.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))}
    </div>
  );
}

export default Booklist;

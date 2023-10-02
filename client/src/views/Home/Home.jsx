import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  let [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => console.log(err));
  });

  function handleClick(isbn) {
    navigate(`/${isbn}`);
  }

  return (
    <div>
      <p>Welcome to the Library</p>
      <Link to="/create">Create a Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h2>{book.name}</h2>
            <p>ISBN: {book.isbn}</p>
            <button
              onClick={() => {
                handleClick(book.isbn);
              }}
            >
              Book Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

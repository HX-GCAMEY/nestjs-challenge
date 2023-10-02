import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Detail() {
  const {isbn} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${isbn}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [isbn]);

  return (
    <div>
      <h2>{book.name}</h2>
      <p>ISBN: {book.isbn}</p>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default Detail;

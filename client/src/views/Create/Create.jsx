import {useState, useEffect} from "react";

function Create() {
  const [authors, setAuthors] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    isbn: "",
    author: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/authors")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
      })
      .catch((err) => console.log(err));
  });

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then(() => {
        alert("Book created successfully");
      })
      .catch((err) => alert(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" value={inputs.name} onChange={handleChange} />
      <label>ISBN</label>
      <input name="isbn" value={inputs.isbn} onChange={handleChange} />
      <label>Author</label>
      <select name="author" value={inputs.author} onChange={handleChange}>
        <option value="" disabled selected>
          Selecciona un autor
        </option>
        {authors.map((author) => (
          <option key={author._id} value={author._id}>
            {author.first_name} {author.last_name}
          </option>
        ))}
      </select>
      <button type="submit">Create Book</button>
    </form>
  );
}

export default Create;

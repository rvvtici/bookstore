import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Database = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/database")
      .then((result) => setBooks(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteBook/" + id)
      .then((res) => {
        console.log(res);
        setBooks(books.filter((b) => b._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to="/create">Add +</Link>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  {/* <Link to="/update">Edit</Link> */}
                  <Link to={`/update/${book._id}`}>Edit</Link>
                  <button onClick={(e) => handleDelete(book._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Database;

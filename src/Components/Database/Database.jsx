import React, { useState } from "react";
import { Link } from "react-router-dom";

const Database = () => {
  const [books, setBooks] = useState([
    {
      Title: "dorian",
      Author: "oscar wilde",
    },
  ]);

  return (
    <div>
      <table className="table">
        <Link to="/create">Add +</Link>
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
              <tr>
                <td>{book.Title}</td>
                <td>{book.Author}</td>
                <td>
                  <Link to="/update">Edit</Link>
                  <button>Delete</button>
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

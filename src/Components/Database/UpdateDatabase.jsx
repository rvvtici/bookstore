import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateDatabase() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getBook/" + id)
      .then((result) => {
        console.log(result);
        setTitle(result.data.title);
        setAuthor(result.data.author);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateBook/" + id, { title, author })
      .then((result) => {
        console.log(result);
        navigate("/database");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={Update}>
        <h2>Update</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Enter Author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateDatabase;

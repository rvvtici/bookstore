import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDatabase = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // const [pages, setPages] = useState("");

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/addBook", { title, author })
      .then((result) => {
        console.log(result);
        navigate("/database");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <h2>Create</h2>

        <div>
          <label htmlFor="title">Name</label>
          <input
            id="title"
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            placeholder="Enter Author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDatabase;

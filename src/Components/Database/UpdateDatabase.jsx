import React from "react";

function UpdateDatabase() {
  return (
    <div>
      <form>
        <h2>Update</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Enter Author"
            className="form-control"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateDatabase;

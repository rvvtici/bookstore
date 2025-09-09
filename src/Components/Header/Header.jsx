import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <div id="nav-left">
        <img src="favicon-96x96.png" alt="logo" />
        <h2>rav's bookstore</h2>
      </div>
      <div id="nav-center">
        <input
          type="text"
          placeholder="Search by title, author or ISBN"
          className="input-style"
        />
        <button type="submit">
          {/* Browse: */}
          <FaSearch className="icon"></FaSearch>
        </button>
      </div>
      <div id="nav-right">
        <FaUser className="icon" />
        {/* <i className="fa-solid fa-user"></i> */}
      </div>
    </div>
  );
};

export default Header;

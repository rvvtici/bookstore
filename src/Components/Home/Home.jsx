import React from "react";
import { Link } from "react-router-dom";
import "./teste.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div id="nav-left">
          <img src="favicon-96x96.png" alt="logo" />
          <h1>rav's sebo</h1>
        </div>
        <div id="nav-center">
          <input type="text" placeholder="search" />
          <button type="submit">submit</button>
        </div>
        <div id="nav-right">
          <i className="fa-solid fa-user"></i>
        </div>
      </header>

      <main>
        <div id="bestsellers">{/*  */}</div>

        <div className="product-list-container">
          {/* mongodb, carousel */}
          <div className="product-list-header">
            <h2 className="product-list-title">New Additions</h2>
            <a href="/books">
              <button type="see-more">see more</button>
            </a>
          </div>

          <div className="product-container">
            <div className="product-img">
              <img src="dorian_gray.png" alt="dorian_gray" />
            </div>

            <a href="/books/dorian">
              <h3 className="book-title">O Retrato de Dorian Gray</h3>
            </a>
            <h4 className="book-author">Oscar Wilde</h4>
            <p className="book-price">R$ 50</p>
          </div>
        </div>

        <div id="promo">{/*  */}</div>
      </main>

      <footer>
        <p>contact:</p>
        <p>(11) 94842-3878</p>
        <p>rvvtici@gmail.com</p>
        <a href="https://linkedin.com/in/rvvtici">linkedin</a>
        <a href="https://github.com/rvvtici">github</a>
        <a href="">portfolio</a>
        <h3>© rvvtici / ravtcm</h3>
      </footer>
    </div>
  );
};

export default Home;

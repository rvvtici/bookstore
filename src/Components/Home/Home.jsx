import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./teste.css";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "O Retrato de Dorian Gray",
      author: "Oscar Wilde",
      price: "R$ 50",
      img: "dorian_gray.png",
      link: "/books/oscar-wilde/dorian",
    },
    {
      id: 2,
      title: "Dom Quixote",
      author: "Miguel de Cervantes",
      price: "R$ 60",
      img: "dom_quixote.png",
      link: "/books/domquixote",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "R$ 45",
      img: "1984.png",
      link: "/books/1984",
    },
  ];

  return (
    <div className="home">
      <Header />

      <main>
        <div className="product-list-container">
          <div className="product-list-header">
            <h2 className="product-list-title">New Additions</h2>
            <a href="/books">
              <button type="see-more">See More</button>
            </a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-container">
                <div className="product-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <a href={product.link}>
                  <h3 className="book-title">{product.title}</h3>
                </a>
                <h4 className="book-author">{product.author}</h4>
                <p className="book-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

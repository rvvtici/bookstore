import React from 'react'
import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
  return (
    <>
      <header>
          <div id="header">
              <div id="nav-left">
                  <img src="favicon-96x96.png" alt="logo" />
                  <h1>rav's sebo</h1>
              </div>
              <div id="nav-center">
                  <input type="text" placeholder="search" />
                  <button type="submit">submit</button>  
              </div>
              <div id="nav-right">
                  <i class="fa-solid fa-user"></i>
              </div>
          </div>
      </header>


      <main>
          <div id="bestsellers">
          </div>
          
          <div class="product-list-container"> 


{/* mongodb */}
              <div class="product-list-header">
                  <h2 class="product-list-title">New Additions</h2>
                  <a href="/books">
                      <button type="see-more">see more</button>
                  </a>
              </div>

              <div class="product-container">
                  <div class="product-img">
                     <img src="dorian_gray.png" alt="dorian_gray" />
                  </div>

                  <a href="/books/dorian">
                      <h3 class="book-title">O Retrato de Dorian Gray</h3>
                  </a>
                      <h4 class="book-author">Oscar Wilde</h4>
                  <p class="book-price">R$ 50</p>
              </div>           
          </div>

          <div id="promo">
          </div>
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



    </>
  )
}

export default Home

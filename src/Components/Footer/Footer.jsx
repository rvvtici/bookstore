import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top">
        <div className="coluna">
          <p>contact:</p>
          <p>(11) 94842-3878</p>
          <p>rvvtici@gmail.com</p>
        </div>
        <div className="coluna">
          <a href="https://linkedin.com/in/rvvtici">linkedin</a>
          <a href="https://github.com/rvvtici">github</a>
          <a href="">portfolio</a>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>© rvvtici / ravtcm</h3>
      </div>
    </div>
  );
};

export default Footer;

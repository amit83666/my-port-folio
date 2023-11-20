import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact-detatils">
        <div>
          <img src="./assets/footer-icon.png" alt="" />
        </div>
        <div className="contact-links">
          <p className="num">+91 90348 39322</p>
          <p>sde.amit.kumar@gmail.com</p>
          <div>
            <a href="#">
              <img src="./assets/github-icon.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/twitter-icon.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/linkedin-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="line-separate">
        <hr />
      </div>
      <div className="pages-limks">
        <div className="nav-link">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Tech Stack</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <p>Designed and built by <span className="amit-kumar"> Amit Kumar </span>  with <span className="amit-kumar">Love</span> & <span className="amit-kumar">Coffee</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
